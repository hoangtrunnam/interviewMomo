import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { TouchRippleSingle } from 'src/components/Button/TouchRippleSingle'
import ExpoImage from 'src/components/Image'
import { Text } from 'src/components/Text'

interface IPropsItemContact {
  first_name: string
  last_name: string
  phoneNumber: string
  containerStyle?: ViewStyle
  onPressIconHeart: (phoneNumber: string) => void
}
const ItemContact = (props: IPropsItemContact) => {
  const { first_name = '', last_name = '', phoneNumber = '', containerStyle, onPressIconHeart = () => {} } = props
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
          <ExpoImage
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
          />
        </View>
        <View style={{ paddingLeft: 16 }}>
          <Text size={18} bold>
            {last_name} {first_name}
          </Text>
          <Text size={14} color="#8F9294">
            {phoneNumber}
          </Text>
        </View>
      </View>
      <TouchRippleSingle onPress={() => onPressIconHeart(phoneNumber)}>
        <View>
          <Ionicons name="heart-outline" size={32} color={'#8F9294'} />
        </View>
      </TouchRippleSingle>
    </View>
  )
}

export default React.memo(ItemContact)

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
})
