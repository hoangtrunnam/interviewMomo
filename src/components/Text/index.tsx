import React from 'react'
import { StyleSheet, TextProps, TextStyle } from 'react-native'
import { TextCustom } from './TextCustom'
import { styleWithScale } from 'src/commons/dimension'

export type IPropsTranslate = {
  trans?: any
  transLocale?: any
  transParam?: any[]
}

export type IPropsText = TextProps &
  IPropsTranslate &
  React.PropsWithChildren & {
    color?: string
    size?: number
    autoScale?: boolean
    textAlign?: TextStyle['textAlign']
    bold?: boolean
    semiBold?: boolean
    medium?: boolean
    light?: boolean
    regular?: boolean
    underline?: boolean
  }
export const Text = (props: IPropsText) => {
  const {
    trans,
    allowFontScaling = false, // prevents users from adjusting font size in settings
    children: _children,
    style: _style,
    color,
    size,
    autoScale = true,
    textAlign
  } = props
  const children = trans ?? _children
  const style = styleWithScale(
    StyleSheet.flatten([
      { fontSize: 13, textAlign },
      !!color && { color },
      size !== undefined && { fontSize: size, lineHeight: size * 1.4 },
      _style
    ]),
    autoScale
  )
  return (
    <TextCustom {...props} allowFontScaling={allowFontScaling} style={style}>
      {children}
    </TextCustom>
  )
}
