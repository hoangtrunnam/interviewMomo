import React from 'react'

import { GestureResponderEvent, PressableProps, StyleSheet, ViewProps, Text, View } from 'react-native'
import TouchRipple from './TouchRipple'

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

export interface ButtonProps extends ViewProps {
  fullWidth?: boolean
  onPress?: null | ((event: GestureResponderEvent) => void)
  touchProps?: PressableProps
  background?: any
  disabled?: boolean
}

/**
 * custom lai button theo design
 * nếu children là text sẽ hiển thị theo default
 * có 3 dạng Button chủ yếu
 * @Button
 * @ButtonSingle
 * @OutlineButton
 * @UnderlineButton
 */

export const Button = React.forwardRef<any, ButtonProps>((props, ref) => {
  const { children, onPress, touchProps, disabled } = props
  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text
          style={{
            fontSize: 14,
            lineHeight: 18,
            fontWeight: 'bold',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: '#ffffff'
          }}>
          {children}
        </Text>
      )
    }
    return children
  }

  return (
    <TouchRipple
      disabled={disabled}
      style={styles.touch}
      {...touchProps}
      renderTouchComponent={(p: any) => <TouchRipple {...p} />}
      hitSlop={defaultHislop}
      onPress={onPress}>
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 8,
          borderRadius: 10,
          backgroundColor: '#0E1C45'
        }}
        {...props}
        ref={ref}>
        {renderChildren()}
      </View>
    </TouchRipple>
  )
})

export const ButtonSingle = React.forwardRef<any, ButtonProps>((props, ref) => {
  const { children, onPress, touchProps } = props
  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text
          style={{
            fontSize: 16,
            lineHeight: 20,
            fontWeight: 'bold',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}>
          {children}
        </Text>
      )
    }
    return children
  }

  return (
    <TouchRipple
      style={styles.touch}
      {...touchProps}
      renderTouchComponent={(p: any) => <TouchRipple {...p} />}
      hitSlop={defaultHislop}
      onPress={onPress}>
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 8,
          borderRadius: 10,
          backgroundColor: '#FF881D'
        }}
        {...props}
        ref={ref}>
        {renderChildren()}
      </View>
    </TouchRipple>
  )
})

export const OutlineButton = React.forwardRef<any, ButtonProps>((props, ref) => {
  const { children, onPress, touchProps, ...rest } = props
  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text
          style={{
            fontSize: 14,
            lineHeight: 18,
            fontWeight: '700',
            color: '#FF881D'
          }}>
          {children}
        </Text>
      )
    }
    return children
  }

  return (
    <TouchRipple
      style={styles.touch}
      {...touchProps}
      renderTouchComponent={(p: any) => <TouchRipple {...p} />}
      hitSlop={defaultHislop}
      onPress={onPress}>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#FF881D',
          paddingHorizontal: 24,
          paddingVertical: 8,
          borderRadius: 10,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff'
        }}
        {...rest}
        ref={ref}>
        {renderChildren()}
      </View>
    </TouchRipple>
  )
})

export const UnderlineButton = React.forwardRef<any, ButtonProps>((props, ref) => {
  const { children, onPress, touchProps, ...rest } = props
  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text
          style={{
            fontSize: 16,
            lineHeight: 20,
            fontWeight: 'bold',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}>
          {children}
        </Text>
      )
    }
    return children
  }

  return (
    <TouchRipple hitSlop={defaultHislop} onPress={onPress} {...touchProps}>
      <View style={{ backgroundColor: '#FF881D' }} {...rest} ref={ref}>
        {renderChildren()}
      </View>
    </TouchRipple>
  )
})
