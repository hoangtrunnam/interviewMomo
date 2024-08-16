import React, { ReactNode } from 'react'
import { GestureResponderEvent, PressableProps, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const defaultHislop = {
  top: 10,
  left: 10,
  right: 10,
  bottom: 10
}

const styles = StyleSheet.create({
  touch: {
    overflow: 'hidden'
  }
})

interface TouchRippleSingleProps {
  onPress?: (event: GestureResponderEvent) => void
  touchProps?: PressableProps
  delay?: number
  children: ReactNode
  disabled?: boolean
  testID?: string | undefined
}

/**
 * component kết hợp cả ripple và single lại làm 1
 * @param props
 */
export const TouchRippleSingle: React.FC<TouchRippleSingleProps> = props => {
  const { children, onPress, disabled, testID } = props
  return (
    <TouchableWithoutFeedback
      testID={testID}
      disabled={disabled}
      style={styles.touch}
      hitSlop={defaultHislop}
      onPress={onPress}>
      {children}
    </TouchableWithoutFeedback>
  )
}
