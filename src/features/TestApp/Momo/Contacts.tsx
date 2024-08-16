import { FlashList } from '@shopify/flash-list'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { getListContactsFriend } from 'src/api/Test'
import { TouchRippleSingle } from 'src/components/Button/TouchRippleSingle'
import CustomHeaderMomo from 'src/components/DefaultActionBar/CustomHeaderMomo'
import { useLoading } from 'src/components/LoadingPortal'
import { Text } from 'src/components/Text'
import { IDataContact } from 'src/constants/defines'
import ItemContact from './ItemContact'

const Contacts = () => {
  const { showLoading, hideLoading } = useLoading()
  const [activeTabFriends, setActiveTabFriends] = useState<boolean>(true)
  const [listFriendContact, setListFriendContact] = useState<IDataContact[]>([])

  const handleLikeFriend = useCallback((phoneNumber: string) => {
    console.log('handleLikeFriend', phoneNumber)
  }, [])

  const tabStyles = [
    {
      borderWidth: activeTabFriends ? 1 : 0,
      backgroundColor: activeTabFriends ? '#fff' : '#FAFAFA'
    },
    {
      borderWidth: !activeTabFriends ? 1 : 0,
      backgroundColor: !activeTabFriends ? '#fff' : '#FAFAFA',
      marginLeft: 16
    }
  ]

  const tabTexts = [
    { text: 'Bạn bè', color: activeTabFriends ? '#cc598d' : '#7F7F7F' },
    { text: 'Tài khoản ngân hàng', color: !activeTabFriends ? '#cc598d' : '#7F7F7F' }
  ]

  const handleGetListContactFriend = async () => {
    showLoading()
    const res = await getListContactsFriend()
    if (Array.isArray(res.contacts) && res.contacts?.length > 0) {
      setListFriendContact(res.contacts)
    } else {
      setListFriendContact([])
    }
    hideLoading()
  }

  useEffect(() => {
    handleGetListContactFriend()
  }, [])

  const renderItem = ({ item }: { item: IDataContact }) => {
    return <ItemContact {...item} containerStyle={{ marginTop: 16 }} onPressIconHeart={handleLikeFriend} />
  }
  const renderListBank = () => (
    <View>
      <Text>this is list bank</Text>
    </View>
  )

  return (
    <>
      <CustomHeaderMomo />
      <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <TouchRippleSingle onPress={() => setActiveTabFriends(true)}>
            <View style={[styles.containerTopTab, tabStyles[0]]}>
              <Text size={16} bold color={tabTexts[0].color}>
                {tabTexts[0].text}
              </Text>
            </View>
          </TouchRippleSingle>
          <TouchRippleSingle onPress={() => setActiveTabFriends(false)}>
            <View style={[styles.containerTopTab, tabStyles[1]]}>
              <Text size={16} bold color={tabTexts[1].color}>
                {tabTexts[1].text}
              </Text>
            </View>
          </TouchRippleSingle>
        </View>
        {activeTabFriends ? (
          <View style={{ flex: 1, marginTop: 16 }}>
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
  containerTopTab: {
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20
  }
})
