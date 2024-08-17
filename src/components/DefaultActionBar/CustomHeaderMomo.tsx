import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Keyboard, StyleSheet, TextInput, View } from 'react-native'
import { DIMENSION, styleWithScale } from 'src/commons/dimension'
import { TouchRippleSingle } from '../Button/TouchRippleSingle'
import { Text } from '../Text'

interface IProps {
  title?: string
  onChangeText?: (value: string) => void
}

const CustomHeaderMomo = React.forwardRef<any, IProps>((props: IProps, ref) => {
  const { onChangeText = () => {} } = props
  const [value, setValue] = useState<string>('')

  const handleCancel = () => {
    setValue('')
    Keyboard.dismiss()
  }

  return (
    <LinearGradient
      colors={['#cc598d', '#c67f9f']}
      style={styleWithScale(styles.background)}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <View style={styleWithScale(styles.container)} ref={ref} {...props}>
        <View style={styleWithScale(styles.searchContainer)}>
          <View style={styleWithScale(styles.iconContainer)}>
            <Ionicons name="search-outline" size={32} color="#ABBDCF" />
          </View>
          <TextInput
            style={styleWithScale(styles.textInput)}
            value={value}
            onChangeText={e => {
              setValue(e)
              onChangeText && onChangeText(e)
            }}
            autoCorrect={false}
            autoComplete="off"
            placeholder="Nhập tên, số điện thoại, số tài khoản"
          />
        </View>
        <TouchRippleSingle onPress={handleCancel}>
          <View style={styleWithScale(styles.cancelButton)}>
            <Text size={16} bold color="#fff">
              Hủy
            </Text>
          </View>
        </TouchRippleSingle>
      </View>
    </LinearGradient>
  )
})

export default React.memo(CustomHeaderMomo)

const styles = StyleSheet.create({
  background: {
    left: 0,
    right: 0,
    top: 0,
    height: DIMENSION.isIos ? 110 : 90
  },
  container: {
    marginTop: DIMENSION.isIos ? DIMENSION.topPadding + 30 : 10,
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  searchContainer: {
    backgroundColor: '#ffff',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ABBDCF',
    borderRadius: 32,
    flex: 1
  },
  iconContainer: {
    paddingLeft: 16
  },
  textInput: {
    flex: 1,
    height: 45,
    paddingHorizontal: 16
  },
  cancelButton: {
    paddingLeft: 16
  }
})
