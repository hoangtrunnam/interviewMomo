import { ImageStyle, StyleProp } from 'react-native'
import { Image } from 'expo-image'
import { IMAGES } from '../images'
import { sizeScale } from 'src/commons/dimension'

interface IPropsIcon {
  size?: number
  height?: number
  style?: StyleProp<ImageStyle>
}

export const IconShoppee = (props: IPropsIcon) => (
  <Image {...props} style={[sizeScale([56, 56], props?.size, props?.height), props?.style]} source={IMAGES.shopee} />
)
