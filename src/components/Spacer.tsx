import React, { useMemo } from 'react'
import { View } from 'react-native'
import { scale } from 'src/commons/dimension'
interface IpropsSpacer {
  height?: number
  width?: number
}
export const Spacer = (props: IpropsSpacer) => {
  const { height = 0, width = 0 } = props

  // style
  const actualStyle = useMemo(
    () => ({
      width: typeof width === 'number' ? scale(width) : width,
      height: typeof height === 'number' ? scale(height) : height
    }),
    [height, width]
  )

  // render
  return <View style={actualStyle} />
}
