/* eslint-disable react-native/no-inline-styles */
import React, { useImperativeHandle, useRef, useState } from 'react'
import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'
import { View } from 'react-native'
import { Button } from '../Button'
import { DIMENSION, scale } from 'src/commons/dimension'
import { defaultColors } from 'src/configs/colors'
import { Text } from '../Text'
import { TouchRippleSingle } from '../Button/TouchRippleSingle'
import IconClose from 'src/assets/iconsSvg/IconClose'
import { Spacer } from '../Spacer'

type Props = {
  phoneNumber: string
}

export type ModalType = {
  openModal: () => void
  forgetPW: () => void
}

const Modal = React.forwardRef<ModalType, Props>((props, ref) => {
  const { phoneNumber = '' } = props
  const refModalForgetPwd = useRef<Modalize>(null)

  const handleForgotPassword = React.useCallback(async () => {
    console.log('okok', phoneNumber)
  }, [phoneNumber])

  useImperativeHandle(
    ref,
    () => ({
      openModal: () => {
        refModalForgetPwd.current?.open()
      },
      forgetPW: () => {
        handleForgotPassword()
      }
    }),
    [handleForgotPassword]
  )

  return (
    <Portal>
      <Modalize
        modalHeight={DIMENSION.height}
        withHandle={false}
        ref={refModalForgetPwd}
        FooterComponent={
          <View style={{ paddingHorizontal: scale(16), paddingBottom: scale(DIMENSION.bottomPadding) }}>
            <Button
              onPress={() => {
                refModalForgetPwd.current?.close()
              }}>
              <Text size={16} color={defaultColors.h_ffffff}>
                ok
              </Text>
            </Button>
          </View>
        }>
        <View style={{ paddingTop: DIMENSION.avoidStatusBarDistance, paddingHorizontal: scale(16), flex: 1 }}>
          <View style={{ width: scale(40), height: scale(40), justifyContent: 'center', alignItems: 'center' }}>
            <TouchRippleSingle
              onPress={() => {
                refModalForgetPwd.current?.close()
              }}>
              <IconClose />
            </TouchRippleSingle>
          </View>
          <Spacer height={40} />
          <View style={{ paddingTop: scale(25) }}>
            <Text size={24} style={{ alignItems: 'center' }}>
              hoan thanh
            </Text>
          </View>
          <Spacer height={8} />
          <Text size={14} color={defaultColors.ink350} style={{ justifyContent: 'center' }}>
            okok dmmm
          </Text>
          <Spacer height={16} />
        </View>
      </Modalize>
    </Portal>
  )
})

export default Modal
