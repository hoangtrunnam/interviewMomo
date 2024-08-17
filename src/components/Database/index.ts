import * as SQLite from 'expo-sqlite'
import { IDataContact, IDataContactSql } from 'src/constants/defines'

export const setupDatabase = async () => {
  try {
    const db = await SQLite.openDatabaseAsync('contacts.db')
    await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY NOT NULL, 
      first_name TEXT NOT NULL, 
      last_name TEXT NOT NULL, 
      phone_number TEXT NOT NULL,
      is_like INTEGER DEFAULT 0
    );
      CREATE INDEX IF NOT EXISTS idx_phone_number ON contacts (phone_number);
      CREATE INDEX IF NOT EXISTS idx_first_name ON contacts (first_name);
  `)

    return db
  } catch (error) {
    console.log(error)
  }
}

export const getAllContacts = async (db: SQLite.SQLiteDatabase) => {
  try {
    const allContacts: IDataContactSql[] = await db.getAllAsync('SELECT * FROM contacts')
    if (Array.isArray(allContacts) && allContacts.length > 0) {
      return allContacts
    }
    return []
  } catch (error) {
    console.log(error)
    return []
  }
}

export const insertContacts = async (db: SQLite.SQLiteDatabase, contacts: IDataContact[]): Promise<boolean> => {
  try {
    let isSaveSuccess = false
    for (const contact of contacts) {
      // Kiểm tra xem contact đã tồn tại trong cơ sở dữ liệu hay chưa
      const existingContact = await db.getFirstAsync(
        `SELECT * FROM contacts WHERE first_name = ? AND last_name = ? AND phone_number = ?`,
        [contact.first_name, contact.last_name, contact.phoneNumber]
      )

      // Chỉ chèn contact chưa tồn tại
      if (!existingContact) {
        await db.runAsync(`INSERT INTO contacts (first_name, last_name, phone_number, is_like) VALUES (?, ?, ?, ?)`, [
          contact.first_name,
          contact.last_name,
          contact.phoneNumber,
          contact.is_like ? 1 : 0
        ])
        isSaveSuccess = true
      } else {
        isSaveSuccess = false
        console.log(`${contact.first_name} ${contact.last_name} đã tồn tại trong database.`)
      }
    }
    return isSaveSuccess
  } catch (error) {
    console.log(error)
    return false
  }
}

export const saveContactListToDatabase = async (db: SQLite.SQLiteDatabase, data: IDataContact[]) => {
  try {
    return await insertContacts(db, data)
  } catch (error) {
    console.log(error)
  }
}

export const clearDatabase = async (db: SQLite.SQLiteDatabase) => {
  try {
    await db.runAsync('DELETE FROM contacts')
    console.log('data removed')
  } catch (error) {
    console.log(error)
  }
}

export const toggleLikeStatus = async (db: SQLite.SQLiteDatabase, phoneNumber: string): Promise<boolean> => {
  try {
    // Tìm contact có số điện thoại trùng với phoneNumber trong db
    const contact: IDataContactSql | null = await db.getFirstAsync(`SELECT * FROM contacts WHERE phone_number = ?`, [
      phoneNumber
    ])

    if (contact) {
      // Kiểm tra giá trị hiện tại của is_like và đảo ngược giá trị
      const newIsLike = contact.is_like === 1 ? 0 : 1

      // update giá trị is_like trong database
      await db.runAsync(`UPDATE contacts SET is_like = ? WHERE phone_number = ?`, [newIsLike, phoneNumber])

      console.log(`Contact with phone number ${phoneNumber} is now ${newIsLike === 1 ? 'liked' : 'unliked'}.`)
      return true
    } else {
      console.log(`Contact with phone number ${phoneNumber} not found.`)
      return false
    }
  } catch (error) {
    console.log('Error updating is_like:', error)
    return false
  }
}
