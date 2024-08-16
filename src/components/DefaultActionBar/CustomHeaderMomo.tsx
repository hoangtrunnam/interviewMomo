/* eslint-disable react-native/no-inline-styles */
import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Keyboard, StyleSheet, TextInput, View } from 'react-native'
import { DIMENSION } from 'src/commons/dimension'
import { TouchRippleSingle } from '../Button/TouchRippleSingle'
import { Text } from '../Text'
interface IProps {
  title?: string
}

const CustomHeaderMomo = React.forwardRef<any, IProps>((props: IProps, ref) => {
  const [value, setValue] = useState<string>('')
  const handleCancel = () => {
    setValue('')
    Keyboard.dismiss()
  }
  return (
    <LinearGradient
      colors={['#cc598d', '#c67f9f']}
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <View
        style={{
          marginTop: DIMENSION.topPadding + 30,
          flexDirection: 'row',
          height: 100,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16
        }}
        ref={ref}
        {...props}>
        <View
          style={{
            backgroundColor: '#ffff',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#ABBDCF',
            borderRadius: 32,
            flex: 1
          }}>
          <View style={{ paddingLeft: 16 }}>
            <Ionicons name="search-outline" size={32} color="#ABBDCF" />
          </View>
          <TextInput
            style={{
              flex: 1,
              height: 45,

              paddingHorizontal: 16
            }}
            value={value}
            onChangeText={setValue}
            placeholder="Nhập tên, số điện thoại hoặc số tài khoản"
          />
        </View>
        <TouchRippleSingle onPress={handleCancel}>
          <View style={{ paddingLeft: 16 }}>
            <Text size={16} bold color="#fff">
              Hủy
            </Text>
          </View>
        </TouchRippleSingle>
      </View>
    </LinearGradient>
  )
})

export default CustomHeaderMomo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  background: {
    // position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 110
  }
})
