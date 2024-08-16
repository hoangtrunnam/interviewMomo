import { Dimensions } from 'react-native'
import { scale } from 'src/commons/dimension'

const { width, height } = Dimensions.get('window')
const _hScale = scale(1)
const HEADER_BANNER__HOME_HEIGHT = scale(200)
const BALANCE_CARD_HOME_OFFSET = _hScale * 10
const SEARCHBAR_HOME_HEIGHT = _hScale * 34
const SEARCHBAR_HOME_WIDTH = width * 0.723
const SEARCHBAR_HOME_WRAP_MARGIN_TOP = _hScale * 60.25

const Styles = {
  MulishBlack: 'Mulish-Black',
  MulishBlackItalic: 'Mulish-BlackItalic',
  MulishBold: 'Mulish-Bold',
  MulishBoldItalic: 'Mulish-BoldItalic',
  MulishExtraBold: 'Mulish-ExtraBold',
  MulishExtraBoldItalic: 'Mulish-ExtraBoldItalic',
  MulishExtraLight: 'Mulish-ExtraLight',
  MulishExtraLightItalic: 'Mulish-ExtraLightItalic',
  MulishItalic: 'Mulish-Italic',
  MulishLight: 'Mulish-Light',
  MulishLightItalic: 'Mulish-LightItalic',
  MulishMedium: 'Mulish-Medium',
  MulishMediumItalic: 'Mulish-MediumItalic',
  MulishRegular: 'Mulish-Regular',
  MulishSemiBold: 'Mulish-SemiBold',
  MulishSemiBoldItalic: 'Mulish-SemiBoldItalic',
  width,
  height,
  paddingHorizontal: 13,
  activeOpacity: 0.6,
  text: {
    fontFamily: 'Mulish-Medium'
  },
  textBold: {
    fontFamily: 'Mulish-SemiBold',
    color: '#342A2A'
  },
  HEADER_BANNER__HOME_HEIGHT,
  BALANCE_CARD_HOME_OFFSET,
  SEARCHBAR_HOME_HEIGHT,
  SEARCHBAR_HOME_WIDTH,
  SEARCHBAR_HOME_WRAP_MARGIN_TOP
}

export default Styles
