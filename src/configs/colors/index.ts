/**
 * màu dùng chung cho toàn bô app
 * được lấy theo design
 * nếu co thay đổi cần ghi rõ dùng ở đâu
 */
import darkColors from './dark'
import lightColors from './light'

export const defaultColors = {
  transparent: 'transparent',

  // #F7941C
  primary: '#ffff',

  primaryA500: '#FF6E00',

  // background color
  // #FFF5E9
  bg_FFF5E9: '#FFF5E9',

  // #FFEEDA
  bg_FFEEDA: '#FFEEDA',

  // #FCDAB0
  bg_FCDAB0: '#FCDAB0',

  // #F7F7F7
  bg_F7F7F7: '#F7F7F7',

  // #FBFBFB
  bg_FBFBFB: '#FBFBFB',
  bg_E5E5E5: '#E5E5E5',
  // #3B5998
  bg_3B5998: '#3B5998',

  // #F6F4F3
  bg_F6F4F3: '#F6F4F3',

  // #FEF6EE
  bg_FEF6EE: '#FEF6EE',

  // text
  // #E0E1E0
  text_E0E1E0: '#E0E1E0',

  // #828282
  text_828282: '#828282',

  // #ABABAB
  text_ABABAB: '#ABABAB',

  text_4F4F4F: '#4F4F4F',

  // #3B3B3B
  text_3B3B3B: '#3B3B3B',

  text_ffffff: '#ffffff',

  // #302996
  text_302996: '#302996',

  // #261A0C
  text_261A0C: '#261A0C',

  // #ff0000
  text_ff0000: '#ff0000',

  // secondary color
  // #AA3B25
  sec_AA3B25: '#AA3B25',

  // #F24405
  sec_F24405: '#F24405',

  // #F25C05
  sec_F25C05: '#F25C05',

  // #F18603
  sec_F18603: '#F18603',

  // #F4B000
  sec_F4B000: '#F4B000',

  // status color
  // format: h_color | rgb_r_g_b | rgba_r_g_b_a

  h_2E92FF: '#2E92FF',
  // h_FF881D
  h_FF881D: '#FF881D',

  // #007AFF
  h_007AFF: '#007AFF',

  // "#b5d6ff"
  h_b5d6ff: '#b5d6ff',

  // #B6B9CD
  h_B6B9CD: '#B6B9CD',

  // #36384A
  h_36384A: '#36384A',

  // rgba(29, 172, 14, 0.15)
  rgba_29_172_14_15: 'rgba(29, 172, 14, 0.15)',

  rgba_46_146_225_2: 'rgba(46, 146, 225, 0.2)',

  rgba_376_38_439_16: 'rgba(0.376, 0.38, 0.439, 0.16)',
  // rgba(59, 59, 59, )
  rgba_59_59_59_55: 'rgba(59, 59, 59, 0.55)',

  rgba_59_59_59_8: 'rgba(59,59,59,0.8)',
  rgba_59_59_59_7: 'rgba(59,59,59,0.7)',
  rgba_59_59_59_0: 'rgba(59,59,59,0)',

  rgba_0_0_0_88: 'rgba(0,0,0,0.88)',

  rgba_0_0_0_08: 'rgba(0,0,0,0.08)',

  rgbg_255_255_255_75: 'rgba(255,255,255,0.75)',

  rgba_251_251_251_4: 'rgba(251,251,251,0.4)',

  rgba_235_87_87_2: 'rgba(235, 87, 87, 0.2)',

  rgba_46_146_255_2: 'rgba(46, 146, 255, 0.2)',

  rgba_255_146_218_2: 'rgba(255, 146, 218, 0.2)',

  rgba_34_110_147_10: 'rgba(34,110,147,1)',

  rgb_48_41_150: 'rgb(48, 41, 150)',

  rgb_34_122_53: 'rgb(34, 122, 53)',

  rgba_255_136_29_25: 'rgba(255, 136, 29, 0.25)',

  rgba_255_136_29_45: 'rgba(255, 136, 29, 0.45)',

  rgba_0_0_0_25: 'rgba(0,0,0,0.25)',

  // #62CF56
  h_62CF56: '#62CF56',

  // #1DAC0E
  h_1DAC0E: '#1DAC0E',

  // #6771C4
  h_6771C4: '#6771C4',

  // #4E57A9
  h_4E57A9: '#4E57A9',

  // #FF92DA
  h_FF92DA: '#FF92DA',

  // #F06EC4
  h_F06EC4: '#F06EC4',

  // #EAB956
  h_EAB956: '#EAB956',

  // #D73FA3
  h_D73FA3: '#D73FA3',

  // #EB5757
  h_EB5757: '#EB5757',

  // #F10000
  h_F10000: '#F10000',

  // #03DAC6
  h_03DAC6: '#03DAC6',

  // #FE5404
  h_FE5404: '#FE5404',

  // #02A2F3
  h_02A2F3: '#02A2F3',

  h_ffffff: '#ffffff',

  h_212121: '#212121',

  h_888888: '#888888',

  h_000000: '#000000',

  h_C7C9D9: '#C7C9D9',

  h_14142B: '#14142B',

  h_C4C4C4: '#C4C4C4',

  h_2567A6: '#2567A6',

  h_F18603: '#F18603',

  h_78849E: '#78849E',

  h_898988: '#898988',

  h_333333: '#333333',

  // #ffedde
  h_ffedde: '#ffedde',

  h_666666: '#666666',

  bg_header: '#ffffff',
  lb_header: '#F7941C',

  h_ffd8b4: '#ffd8b4',
  h_ffbe83: '#ffbe83',

  overlay_min: 'rgba(0,0,0,0)',
  overlay_max: 'rgba(0,0,0,0.3)',
  h_00000060: 'rgba(0,0,0,0.60)',
  h_00000080: 'rgba(0,0,0,0.80)',
  h_00000045: 'rgba(0,0,0,0.45)',
  h_F3F3F3: '#f3f3f3',
  h_F6F6FE: '#F6F6FE',

  // Mã màu mới
  // Ink
  ink500: '#0E1C45',

  ink400: '#536087',

  ink300: '#9FA4B5',

  ink350: '#808080',

  ink200: 'rgba(238, 238, 238, 1)',

  ink100: 'rgba(242, 243, 244, 1)',

  ink50: 'rgba(243, 244, 246, 1)',

  // Black
  black500: 'rgba(0, 0, 0, 0.8)',

  black400: 'rgba(0, 0, 0, 0.7)',

  black300: 'rgba(0, 0, 0, 0.4)',

  black200: 'rgba(0, 0, 0, 0.3)',

  black100: 'rgba(0,0,0,0.1)',

  // White
  white500: 'rgba(255, 255, 255, 1)',

  white400: 'rgba(255, 255, 255, 0.7)',

  white300: 'rgba(255, 255, 255, 0.4)',

  white200: 'rgba(255, 255, 255, 0.3)',

  white100: 'rgba(255, 255, 255, 0.1)',

  // Blue
  blue500: '#4C95EB',

  blue400: '#70AAEF',

  blue300: '#C9DFF9',

  blue200: '#EDF4FD',

  blue100: '#F6FAFE',

  // Green
  green500: '#1EC689',

  green400: '#4BD1A1',

  green300: '#1EC6894C',

  green200: '#E8F9F3',

  green100: '#F4FCF9',

  // Orange
  orange500: '#EB854C',

  orange400: '#EF9D70',

  orange300: '#F9DAC9',

  orange200: '#FDF3ED',

  orange100: '#FEF9F6',

  // Red
  red500: '#EB4C60',

  red400: '#EF7080',

  red300: '#F9C9CF',

  red200: '#FDEDEF',

  red100: '#FEF6F7',

  // Yellow
  yellow100: '#FEFCF7',
  yellow200: '#FDF8EE',

  // Tone3-Orange
  Tone3_Orange500: '#F08F35',

  Tone3_Orange400: '#F3A55D',

  Tone3_Orange300: '#FBDDC2',

  Tone3_Orange200: '#FEF4EB',

  Tone3_Orange100: '#FEF9F5',

  // Support Color
  bg_default: '#f5f5f5',

  bg_light: 'rgba(238, 238, 238, 1)',

  bg_lighter: 'rgba(251, 251, 251, 1)',

  bg: 'rgba(242, 243, 244, 1)',

  placeholder: 'rgba(246, 246, 246, 1)',

  darkblue: 'rgba(33, 49, 64, 1)',

  imagePlaceholder: 'rgba(232, 237, 243, 1)',

  grabber: 'rgba(221, 221, 221, 1)',

  Primary500: '#2F6BFF',

  tone3_Violet500: '#5346E0',

  inkViolet400: '#536087',

  inkViolet500: '#0E1C45',

  inkViolet100: '#E7E8EC',

  inkViolet200: '#B7BBC7',

  inkViolet300: '#9FA4B5',

  borderInput: '#DBE0E6',

  // top tab
  inactive: 'rgba(159, 164, 181, 1)',

  h_F3F4F6: '#F3F4F6',

  h_F4F5F6: '#F4F5F6',
  h_E8EDF3: '#E8EDF3',

  h_F2F3F4: '#F2F3F4',

  h_F9F9F9: '#F9F9F9',

  h_EAF0FF: '#EAF0FF',

  h_811A6B: '#811A6B',

  h_F8EEF6: '#F8EEF6',

  Pink500: '#D85888',

  h_F4F4F7: '#F4F4F7',

  h_0FB579: '#0FB579',

  h_F6B77D: '#F6B77D',

  // PrimaryA
  PrimaryA500: '#B455A0',
  PrimaryA400: '#B455A0CC',
  PrimaryA300: '#B455A04C',
  PrimaryA200: '#B455A019',
  PrimaryA100: '#B455A00C',

  // PrimaryB
  PrimaryB500: '#493795',
  PrimaryB400: '#493795CC',
  PrimaryB300: '#4937954C',
  PrimaryB200: '#49379519',
  PrimaryB100: '#F5F8FF',

  // PrimaryC
  PrimaryC500: '#2C2B7C',
  PrimaryC400: '#2C2B7CCC',
  PrimaryC300: '#2C2B7C4C',
  PrimaryC200: '#2C2B7C19',
  PrimaryC100: '#2C2B7C0C',

  // Brand Color
  BrandColor1_500: '#A531DC',
  BrandColor1_200: '#F8EAFF',
  BrandColor1_100: '#FBF7FA',
  BrandColor2_500: '#A531DC',

  // Text default
  Text: '#0E1C45',
  h_767577: '#767577',
  h_62267B: '#62267B',
  Accient1_40: '#A531DC',

  // Button Garner Color

  // New Linear Gradient Button
  ButtonColor1_100: '#B511EE',
  ButtonColor1_200: '#4C47DF',

  h_545454: '#545454',

  h_504F4F: '#504F4F',

  h_555555: '#555555',

  h_BABABA: '#BABABA',

  h_E9ECEF: '#E9ECEF',

  h_1534A1: '#1534A1',

  h_98ccfb: '#98ccfb',

  h_69A2D6: '#69A2D6',

  h_005BAC: '#005BAC',

  h_7BAAD5: '#7BAAD5',

  h_005bac: '#005bac',

  // h_D9D9D9: '#D9D9D9',

  h_7dafdb: '#7dafdb',

  h_787878: '#787878',

  h_0e5784: '#0e5784',

  h_CCCCCC: '#CCCCCC',

  h_3797EF: '#3797EF',

  h_9BCBF7: '#9BCBF7',

  // hakone
  h_3A8832: '#3A8832',
  h_FFFFFF: '#FFFFFF',
  h_D9D9D9: '#D9D9D9',
  h_BE1D1D: '#BE1D1D',
  h_848484: '#848484',
  h_ECECEC: '#ECECEC'
}

export type AppColor = typeof defaultColors

export default {
  default: defaultColors,
  light: {
    ...lightColors
  },
  dark: {
    ...darkColors
  }
}
