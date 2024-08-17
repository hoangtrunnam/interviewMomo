import { useState, useEffect } from 'react'
import * as SQLite from 'expo-sqlite'
import { setupDatabase } from 'src/components/Database'

const useDatabase = () => {
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null)
  const [loadingDb, setLoadingDb] = useState<boolean>(true)

  useEffect(() => {
    const initializeDatabase = async () => {
      const database = await setupDatabase()
      if (!database) return
      setDb(database)
      setLoadingDb(false)
    }

    initializeDatabase()
  }, [])

  return { db, loadingDb }
}

export default useDatabase
