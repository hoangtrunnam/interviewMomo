import { Dimensions, ImageStyle, Platform, StatusBar, StyleSheet, TextStyle, ViewStyle } from 'react-native'
const { height, width } = Dimensions.get('window')

//iphone 13
const baseWidth = 390
const baseHeight = 844

export const isTablet = height / width < 1.6
// export const isTablet = deviceInfoModule.isTablet()

/**
 *
 * @param {number} size
 * @returns {number}
 * ex: paddingTop: scale(16), fontSize: scale(16), marginLeft: scale(8)
 */
export const scale = (size: number): number => {
  if (isTablet) {
    return (height / baseHeight) * size
  } else {
    return (width / baseWidth) * size
  }
}

/**
 * Apply scale to numeric values ​​in style
 * @param {Record<string, unknown>} style - The style object needs to have scale applied
 * @param {boolean} [isScale=true] - Flag to determine whether scaling is applied or not (optional), default is true
 * @returns {Record<string, unknown> | undefined} - The style object has scale applied or undefined if the style is undefined
 * ex: 
 * <OWButton
    style={styleWithScale(styles.btnOW)}
    size="default"
    label="Create a new wallet"
    onPress={handleCreateANewWallet}
  />
 */
export const styleWithScale = (
  style: TextStyle | ViewStyle | ImageStyle,
  isScale: boolean = true
): Record<string, unknown> | undefined => {
  if (style === undefined) {
    return undefined
  }
  const flattenedStyle = StyleSheet.flatten(style)
  const scaledEntries = Object.entries(flattenedStyle as any).map(([key, value]) => {
    if (typeof value === 'number' && !['flex', 'opacity'].includes(key)) {
      return [key, isScale ? scale(value) : value]
    }
    return [key, value]
  })

  return Object.fromEntries(scaledEntries)
}

export const sizeScale = (origin: number[], size: number | undefined, height: number | undefined) => {
  const [w, h] = origin
  if (!!size) {
    return styleWithScale({ width: w, height: (h * size) / w })
  } else if (!!height) {
    return styleWithScale({ width: w * (height / h), height: height })
  }
  return styleWithScale({ width: w, height: h })
}

export const DIMENSION = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  avoidStatusBarDistance: Platform.select({
    ios: true ? scale(44) : scale(20),
    default: (StatusBar.currentHeight || scale(24)) + scale(8)
  }),
  topPadding: Platform.select({
    ios: 0,
    android: (StatusBar.currentHeight || scale(24)) + 0,
    default: (StatusBar.currentHeight || scale(24)) + scale(8)
  }),
  bottomPadding: Platform.select({
    ios: true ? scale(34) : scale(20),
    android: scale(30),
    default: scale(10)
  }),
  isIos: Platform.OS === 'ios',
  btnBottomMargin: Platform.OS === 'ios' ? scale(45) : scale(30)
}
