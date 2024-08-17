import { FlashList } from '@shopify/flash-list'
import { SQLiteDatabase } from 'expo-sqlite'
import Fuse from 'fuse.js'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { getListContactsFriend } from 'src/api/Test'
import { scale, styleWithScale } from 'src/commons/dimension'
import { nonAccentVietnamese } from 'src/commons/validator'
import { Button } from 'src/components/Button'
import { TouchRippleSingle } from 'src/components/Button/TouchRippleSingle'
import {
  clearDatabase,
  getAllContacts,
  saveContactListToDatabase,
  setupDatabase,
  toggleLikeStatus
} from 'src/components/Database'
import CustomHeaderMomo from 'src/components/DefaultActionBar/CustomHeaderMomo'
import { useLoading } from 'src/components/LoadingPortal'
import { Text } from 'src/components/Text'
import { fuseOptionsSearch, IDataContactSql } from 'src/constants/defines'
import ItemContact from './ItemContact'

const Contacts = () => {
  const { showLoading, hideLoading } = useLoading()
  const [activeTabFriends, setActiveTabFriends] = useState<boolean>(true)
  const [listFriendContact, setListFriendContact] = useState<IDataContactSql[]>([])
  const [listFriendSearch, setListFriendSearch] = useState<IDataContactSql[]>([])
  const [db, setDb] = useState<SQLiteDatabase | undefined>(undefined)
  const fuse = new Fuse(listFriendSearch, fuseOptionsSearch)

  const tabStyles = [
    {
      borderWidth: activeTabFriends ? 1 : 0,
      backgroundColor: activeTabFriends ? '#fff' : '#FAFAFA'
    },
    {
      borderWidth: !activeTabFriends ? 1 : 0,
      backgroundColor: !activeTabFriends ? '#fff' : '#FAFAFA',
      marginLeft: scale(16)
    }
  ]

  const tabTexts = [
    { text: 'Bạn bè', color: activeTabFriends ? '#cc598d' : '#7F7F7F' },
    { text: 'Tài khoản ngân hàng', color: !activeTabFriends ? '#cc598d' : '#7F7F7F' }
  ]

  const handleLikeFriend = useCallback(
    async (phoneNumber: string) => {
      try {
        if (!db) return
        const result = await toggleLikeStatus(db, phoneNumber)

        if (result) {
          // logic bấm like trong lúc search không bị render lại list
          const updatedContacts = await getAllContacts(db)
          const arrParentsMap = new Map(updatedContacts.map(e => [e.phone_number, e]))
          const res = listFriendContact.map(e => arrParentsMap.get(e.phone_number) || null)
          const newData = res.filter(e => e !== null)
          setListFriendContact(newData)
          // bất kì hành động like nào thì đề phải update lại data search nếu không nó sẽ search theo data cũ
          setListFriendSearch(updatedContacts)
        }
      } catch (error) {
        console.log('Error toggling like status:', error)
      }
    },
    [db, listFriendContact]
  )

  const handleChangeText = useCallback(
    async (e: string) => {
      const simText = nonAccentVietnamese(e)

      if (simText.trim() !== '') {
        const result = fuse.search(simText).map(({ item }) => item)
        setListFriendContact(result)
      } else {
        if (!db) return
        const listContacts = await getAllContacts(db)
        setListFriendContact(listContacts)
      }
    },
    [db, fuse]
  )

  const handleBankPress = async () => {
    setActiveTabFriends(false)

    if (!db) return
    const res = await getAllContacts(db)
    console.log('🚀 ~ onPress={ ~ res:', res)
  }

  const handleGetListContactFriend = useCallback(async () => {
    showLoading()
    const res = await getListContactsFriend()

    if (Array.isArray(res.contacts) && res.contacts?.length > 0 && db) {
      await saveContactListToDatabase(db, res.contacts)
      const listContacts = await getAllContacts(db)
      setListFriendContact(listContacts)
      setListFriendSearch(listContacts) // data search cho fuse
    } else {
      setListFriendContact([])
    }
    hideLoading()
  }, [db])

  useEffect(() => {
    handleGetListContactFriend()
  }, [handleGetListContactFriend])

  useEffect(() => {
    const initializeDatabase = async () => {
      const database = await setupDatabase()
      setDb(database)
    }

    initializeDatabase()
  }, [])

  const renderItem = ({ item }: { item: IDataContactSql }) => {
    const { first_name, last_name, phone_number, is_like } = item
    return (
      <ItemContact
        isLike={is_like}
        firstName={first_name}
        lastName={last_name}
        phoneNumber={phone_number}
        containerStyle={styleWithScale(styles.itemContactContainer)}
        onPressIconHeart={handleLikeFriend}
      />
    )
  }

  const renderListBank = () => (
    <View>
      <Button
        onPress={async () => {
          if (db) {
            clearDatabase(db)
          }
        }}>
        <Text color="#fff" textAlign="center">
          Delete data
        </Text>
      </Button>
    </View>
  )

  return (
    <>
      <CustomHeaderMomo onChangeText={handleChangeText} />
      <View style={styleWithScale(styles.container)}>
        <View style={styleWithScale(styles.tabContainer)}>
          <TouchRippleSingle onPress={() => setActiveTabFriends(true)}>
            <View style={[styleWithScale(styles.containerTopTab), tabStyles[0]]}>
              <Text size={16} bold color={tabTexts[0].color}>
                {tabTexts[0].text}
              </Text>
            </View>
          </TouchRippleSingle>
          <TouchRippleSingle onPress={handleBankPress}>
            <View style={[styleWithScale(styles.containerTopTab), tabStyles[1]]}>
              <Text size={16} bold color={tabTexts[1].color}>
                {tabTexts[1].text}
              </Text>
            </View>
          </TouchRippleSingle>
        </View>
        {activeTabFriends ? (
          <View style={styleWithScale(styles.listContainer)}>
            <FlashList
              estimatedItemSize={1000}
              data={listFriendContact}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          renderListBank()
        )}
      </View>
    </>
  )
}

export default Contacts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 8
  },
  containerTopTab: {
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20
  },
  listContainer: {
    flex: 1,
    marginTop: 16
  },
  itemContactContainer: {
    marginTop: 16
  }
})
