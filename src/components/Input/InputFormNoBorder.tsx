import React, { useEffect, useState } from 'react'
import { TextInput, TextInputProps, TouchableWithoutFeedback } from 'react-native'
import { View, Text } from 'react-native'
import HiddenEye from 'src/assets/iconsSvg/HidenEye'
import ShowEye from 'src/assets/iconsSvg/ShowEye'
import { defaultColors } from 'src/configs/colors'
import { TouchRippleSingle } from '../Button/TouchRippleSingle'

type InputFormProps = Omit<TextInputProps, 'size'> & {
  defaultValue: string
  label: string
  onChangeValue: (value: string) => void
  backgroundColor?: string
  error?: string
  password?: boolean
}

const InputFormNoBorder = React.forwardRef<TextInput, InputFormProps>((props, ref) => {
  const { defaultValue, label, onChangeValue, backgroundColor, error = '', password = false } = props
  const [secure, setSecure] = useState<boolean>(password)
  const [value, setValue] = useState<string>(defaultValue)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const errorStatus = error && error !== ''

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const handleChangeText = (text: string) => {
    setValue(text.trim())
    onChangeValue(text.trim())
  }

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  const renderErrorMessage = () => {
    if (errorStatus) {
      return (
        <Text
          style={{
            marginTop: 4,
            fontSize: 14,
            lineHeight: 18,
            color: '#EF7080'
          }}>
          {error}
        </Text>
      )
    }
    return null
  }

  return (
    <>
      <View
        style={{
          backgroundColor: errorStatus ? '#FDEDEF' : backgroundColor,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: errorStatus ? defaultColors.red400 : defaultColors.borderInput,
          borderRadius: 8
        }}>
        <View style={{ flex: 1 }}>
          {/* TODO: add animation */}
          {value !== '' || isFocus ? (
            <Text
              style={{
                fontSize: 12,
                lineHeight: 16,
                color: defaultColors.inkViolet300
              }}>
              {label}
            </Text>
          ) : null}
          <TextInput
            style={{ fontSize: 16, fontWeight: '400' }}
            placeholder={label}
            placeholderTextColor={defaultColors.ink400}
            onChangeText={handleChangeText}
            value={value}
            secureTextEntry={secure}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            {...props}
          />
        </View>
        {password && value !== '' ? (
          <View
            style={{
              marginLeft: 5,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <TouchRippleSingle onPress={() => setSecure(!secure)}>
              {secure ? <ShowEye /> : <HiddenEye />}
            </TouchRippleSingle>
          </View>
        ) : (
          <View
            style={{
              marginLeft: 5,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
        )}
      </View>
      {renderErrorMessage()}
    </>
  )
})

export default InputFormNoBorder
