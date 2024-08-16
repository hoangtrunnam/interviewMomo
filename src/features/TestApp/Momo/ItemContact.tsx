import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { styleWithScale } from 'src/commons/dimension'
import { TouchRippleSingle } from 'src/components/Button/TouchRippleSingle'
import ExpoImage from 'src/components/Image'
import { Text } from 'src/components/Text'

interface IPropsItemContact {
  firstName: string
  lastName: string
  phoneNumber: string
  containerStyle?: ViewStyle
  onPressIconHeart: (phoneNumber: string) => void
}

const ItemContact = (props: IPropsItemContact) => {
  const { firstName = '', lastName = '', phoneNumber = '', containerStyle, onPressIconHeart = () => {} } = props
  return (
    <View style={[styleWithScale(styles.container), containerStyle]}>
      <View style={styleWithScale(styles.contactInfo)}>
        <View>
          <ExpoImage
            style={styleWithScale(styles.image)}
            source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
          />
        </View>
        <View style={styleWithScale(styles.textContainer)}>
          <Text size={18} bold>
            {lastName} {firstName}
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textContainer: {
    paddingLeft: 16
  }
})
