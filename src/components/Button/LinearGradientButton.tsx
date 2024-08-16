import React, { ReactNode } from 'react'
import TouchRipple from './TouchRipple'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

interface IProps extends Omit<LinearGradientProps, 'colors'> {
  children: ReactNode
  color?: any
  onPress: () => void
  disabled?: boolean
  radius?: number
}

export const LinearGradientButton = (props: IProps) => {
  const { children, color = ['#B511EE', '#4C47DF'], onPress, disabled, radius = 8 } = props

  const linearGradientStyle = { borderRadius: radius }

  return (
    <TouchRipple onPress={onPress} disabled={disabled}>
      <LinearGradient style={linearGradientStyle} colors={color} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} {...props}>
        {children}
      </LinearGradient>
    </TouchRipple>
  )
}
