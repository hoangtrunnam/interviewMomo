import React, { ReactElement } from 'react'
import { StyleSheet, TextStyle, View, ViewStyle, Text } from 'react-native'
import { TouchRippleSingle } from './TouchRippleSingle'
import { defaultColors } from 'src/configs/colors'

export interface ButtonProps {
  onPress?: () => void
  disabled?: boolean
  textButton: string
  styleButton?: ViewStyle
  styleText?: TextStyle
  iconLeft?: ReactElement
  iconRight?: ReactElement
}
export const ButtonCustom: React.FC<ButtonProps> = ({
  onPress = () => {
    /* do something */
  },
  disabled = false,
  textButton = '',
  styleButton = {},
  styleText = {},
  iconLeft,
  iconRight
}) => {
  return (
    <TouchRippleSingle onPress={onPress} disabled={disabled} delay={2000}>
      <View style={[styles.btn, styleButton]}>
        {/* iconLeft */}
        {iconLeft && <View style={{ marginRight: 8 }}>{iconLeft}</View>}
        {/* textButton */}
        <Text style={[styles.text, styleText]}>{textButton}</Text>
        {/* iconRight */}
        {iconRight && <View style={{ marginRight: 8 }}>{iconRight}</View>}
      </View>
    </TouchRippleSingle>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: defaultColors.PrimaryA200,
    borderRadius: 24,
    // height: heightLize(48),
    width: '100%',
    paddingVertical: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: defaultColors.h_ffffff,
    fontSize: 16,
    fontWeight: '600'
  }
})
