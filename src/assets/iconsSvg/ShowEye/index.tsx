import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { scale } from 'src/commons/dimension'

type ShowEyeProps = {
  width?: number
  height?: number
  color?: string
}

const ShowEye = ({ width = 24, height = 24, color = '#9FA4B5' }: ShowEyeProps) => {
  return (
    <Svg width={scale(width)} height={scale(height)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.0003 5C4.36729 5 2.07329 11.617 2.05229 11.684L1.94629 12L2.05129 12.316C2.07329 12.383 4.36729 19 12.0003 19C19.6333 19 21.9273 12.383 21.9483 12.316L22.0543 12L21.9493 11.684C21.9273 11.617 19.6333 5 12.0003 5ZM12.0003 16C9.79429 16 8.00029 14.206 8.00029 12C8.00029 9.794 9.79429 8 12.0003 8C14.2063 8 16.0003 9.794 16.0003 12C16.0003 14.206 14.2063 16 12.0003 16Z"
        fill={color}
      />
      <Path
        d="M12 10C10.916 10 10 10.916 10 12C10 13.084 10.916 14 12 14C13.084 14 14 13.084 14 12C14 10.916 13.084 10 12 10Z"
        fill={color}
      />
    </Svg>
  )
}

export default ShowEye
