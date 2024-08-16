import { FlashList } from '@shopify/flash-list'
import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchRippleSingle } from 'src/components/Button/TouchRippleSingle'
import { Text } from 'src/components/Text'
import { IDataContact, listContact } from 'src/constants/defines'
import ItemContact from './ItemContact'
import CustomHeaderMomo from 'src/components/DefaultActionBar/CustomHeaderMomo'

const Contacts = () => {
  const [activeTabFriends, setActiveTabFriends] = useState<boolean>(true)

  const handleLikeFriend = useCallback((phoneNumber: string) => {
    console.log('handleLikeFriend', phoneNumber)
  }, [])

  const renderItem = ({ item }: { item: IDataContact }) => {
    return <ItemContact {...item} containerStyle={{ marginTop: 16 }} onPressIconHeart={handleLikeFriend} />
  }
  const renderListBank = () => (
    <View>
      <Text>this is list bank</Text>
    </View>
  )

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
              data={listContact}
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
