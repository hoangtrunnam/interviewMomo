import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { scale } from 'src/commons/dimension'
import { defaultColors } from 'src/configs/colors'

type CloseProps = {
  width?: number
  height?: number
  color?: string
}

const IconClose = ({ width = 24, height = 24, color = defaultColors.inkViolet400 }: CloseProps) => {
  return (
    <Svg width={scale(width)} height={scale(height)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.192 6.34424L11.949 10.5862L7.70697 6.34424L6.29297 7.75824L10.535 12.0002L6.29297 16.2422L7.70697 17.6562L11.949 13.4142L16.192 17.6562L17.606 16.2422L13.364 12.0002L17.606 7.75824L16.192 6.34424Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconClose
