import React from 'react'
import { Text, View, ViewProps } from 'react-native'

interface HeaderTitleProps extends ViewProps {
  center?: boolean
  title: string
  titleColor?: string
  size?: number
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  style?: any
}

/** Header with default fontSize:28, color:'#fff', weight:'700' */

const HeaderTitle = (props: HeaderTitleProps) => {
  const { center = false, title, titleColor = '#000000', fontWeight = '700', size } = props
  return (
    <View style={{ alignItems: center }} {...props}>
      <Text
        style={{
          fontSize: size || 24,
          fontWeight: fontWeight,
          color: titleColor
        }}>
        {title}
      </Text>
    </View>
  )
}

export default HeaderTitle
