import { FlashList } from '@shopify/flash-list'
import Fuse from 'fuse.js'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { getListContactsFriend } from 'src/api/Test'
import { scale, styleWithScale } from 'src/commons/dimension'
import { Button } from 'src/components/Button'
import { TouchRippleSingle } from 'src/components/Button/TouchRippleSingle'
import { clearDatabase, getAllContacts, saveContactListToDatabase, setupDatabase } from 'src/components/Database'
import CustomHeaderMomo from 'src/components/DefaultActionBar/CustomHeaderMomo'
import { useLoading } from 'src/components/LoadingPortal'
import { Text } from 'src/components/Text'
import { IDataContactSql } from 'src/constants/defines'
import ItemContact from './ItemContact'
import { nonAccentVietnamese } from 'src/commons/validator'

const fuseOptions = {
  keys: ['first_name', 'last_name', 'phone_number'],
  isCaseSensitive: false,
  includeScore: false,
  shouldSort: true,
  includeMatches: false,
  findAllMatches: false,
  minMatchCharLength: 1,
  location: 0,
  threshold: 0.6,
  distance: 100,
  useExtendedSearch: false,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1
}

const Contacts = () => {
  const { showLoading, hideLoading } = useLoading()
  const [activeTabFriends, setActiveTabFriends] = useState<boolean>(true)
  const [listFriendContact, setListFriendContact] = useState<IDataContactSql[]>([])
  const [listFriendSearch, setListFriendSearch] = useState<IDataContactSql[]>([])
  const fuse = new Fuse(listFriendSearch, fuseOptions)

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

  const handleLikeFriend = useCallback((phoneNumber: string) => {
    console.log('handleLikeFriend', phoneNumber)
  }, [])

  const handleChangeText = useCallback(
    async (e: string) => {
      const simText = nonAccentVietnamese(e)
      const db = await setupDatabase()
      if (simText.trim() !== '') {
        const result = fuse.search(simText).map(({ item }) => item)
        setListFriendContact(result)
      } else {
        const listContacts = await getAllContacts(db)
        setListFriendContact(listContacts)
      }
    },
    [fuse]
  )

  const handleBankPress = async () => {
    setActiveTabFriends(false)
    const db = await setupDatabase()
    if (db) {
      const res = await getAllContacts(db)
      console.log('🚀 ~ onPress={ ~ res:', res)
    }
  }

  const handleGetListContactFriend = async () => {
    showLoading()
    const res = await getListContactsFriend()
    const db = await setupDatabase()
    if (Array.isArray(res.contacts) && res.contacts?.length > 0 && db) {
      await saveContactListToDatabase(db, res.contacts)
      const listContacts = await getAllContacts(db)
      setListFriendContact(listContacts)
      setListFriendSearch(listContacts)
    } else {
      setListFriendContact([])
    }
    hideLoading()
  }

  useEffect(() => {
    handleGetListContactFriend()
  }, [])

  const renderItem = ({ item }: { item: IDataContactSql }) => {
    const { first_name, last_name, phone_number } = item
    return (
      <ItemContact
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
          const db = await setupDatabase()
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
