import * as SQLite from 'expo-sqlite'
import { IDataContact, IDataContactSql } from 'src/constants/defines'

export const setupDatabase = async () => {
  const db = await SQLite.openDatabaseAsync('contacts.db')
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY NOT NULL, 
      first_name TEXT NOT NULL, 
      last_name TEXT NOT NULL, 
      phone_number TEXT NOT NULL
    );
  `)

  return db
}

export const getAllContacts = async (db: SQLite.SQLiteDatabase) => {
  const allContacts: IDataContactSql[] = await db.getAllAsync('SELECT * FROM contacts')
  if (Array.isArray(allContacts) && allContacts.length > 0) {
    return allContacts
  }
  return []
}

export const insertContacts = async (db: SQLite.SQLiteDatabase, contacts: IDataContact[]): Promise<boolean> => {
  let isSaveSuccess = false
  for (const contact of contacts) {
    // Kiểm tra xem contact đã tồn tại trong cơ sở dữ liệu hay chưa
    const existingContact = await db.getFirstAsync(
      `SELECT * FROM contacts WHERE first_name = ? AND last_name = ? AND phone_number = ?`,
      [contact.first_name, contact.last_name, contact.phoneNumber]
    )

    // Chỉ chèn contact chưa tồn tại
    if (!existingContact) {
      await db.runAsync(`INSERT INTO contacts (first_name, last_name, phone_number) VALUES (?, ?, ?)`, [
        contact.first_name,
        contact.last_name,
        contact.phoneNumber
      ])
      isSaveSuccess = true
    } else {
      isSaveSuccess = false
      console.log(`${contact.first_name} ${contact.last_name} đã tồn tại trong database.`)
    }
  }
  return isSaveSuccess
}

export const saveContactListToDatabase = async (db: SQLite.SQLiteDatabase, data: IDataContact[]) => {
  return await insertContacts(db, data)
}

export const clearDatabase = async (db: SQLite.SQLiteDatabase) => {
  await db.runAsync('DELETE FROM contacts')
  console.log('data removed')
}
