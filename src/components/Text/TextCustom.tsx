import React from 'react'
import { Platform, Text, StyleSheet } from 'react-native'
import Styles from 'src/commons/styles'
import { scale } from 'src/commons/dimension'

export const TextCustom = (props: any) => {
  const {
    children,
    txOptions,
    style,
    paddingTop,
    paddingBottom,
    allowFontScaling = false,
    color = '#44494D',
    size = 13,
    centerAlign,
    lineHeight,
    bold,
    semiBold,
    medium,
    light,
    regular,
    onPress,
    underline = false,
    ...other
  } = props
  const getSize = (_size: number) => {
    if (_size === 11) {
      return 11
    }
    if (_size === 13) {
      return 13
    }
    if (_size === 16) {
      return 16
    }
    if (_size === 15) {
      return 15
    }
    return _size || 15 //normal size
  }

  const textStyle = []

  if (size) {
    textStyle.push({
      fontSize: scale(getSize(size)),
      lineHeight: scale(getSize(size) * 1.4)
    })
  }
  if (color) {
    textStyle.push({ color: color })
  }
  if (centerAlign) {
    textStyle.push({ textAlign: 'center' })
  }

  /* font weight */
  if (regular) {
    textStyle.push({
      fontFamily: Styles.MulishRegular
    })
  } else if (medium) {
    textStyle.push({
      fontFamily: Styles.MulishMedium
    })
  } else if (bold) {
    textStyle.push({
      fontFamily: Styles.MulishBold
    })
  } else if (semiBold) {
    textStyle.push({
      fontFamily: Styles.MulishSemiBold
    })
  } else {
    textStyle.push({
      fontFamily: Styles.MulishRegular
    })
  }
  if (underline) {
    textStyle.push({ textDecorationLine: 'underline' })
  }
  if (lineHeight) {
    textStyle.push({ lineHeight: lineHeight })
  }
  if (paddingTop) {
    textStyle.push({ paddingTop: paddingTop })
  }
  if (paddingBottom) {
    textStyle.push({ paddingBottom: paddingBottom })
  }

  /* custom style */
  if (style) {
    textStyle.push(style)
  }

  return (
    <Text onPress={onPress} style={StyleSheet.flatten(textStyle)} {...{ allowFontScaling, ...other }}>
      {children}
    </Text>
  )
}
