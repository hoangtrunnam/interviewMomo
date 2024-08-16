import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface DivideProps {
  size?: number
  color?: string
  marginTop?: number
  style?: StyleProp<ViewStyle>
}

export const Divide: React.FC<DivideProps> = props => {
  const { size = 1, color, marginTop, style } = props
  return (
    <View
      style={[
        {
          width: '100%',
          height: size,
          backgroundColor: color || '#E0E1E0',
          marginTop: marginTop
        },
        style
      ]}
    />
  )
}
