import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { DIMENSION, scale } from 'src/commons/dimension'
import { Text } from 'src/components/Text'
import Modal, { ModalType } from 'src/components/Modal'

const Notifications = () => {
  const modalizeRef = useRef<ModalType>(null)

  const onOpen = () => {
    modalizeRef.current?.openModal()
    modalizeRef.current?.forgetPW()
  }
  return (
    <View style={styles.container}>
      <Text>hoang trung namhahahaha ahahaha hoang trung nammm </Text>
      <TouchableOpacity onPress={() => onOpen()}>
        <Text>Open the modal</Text>
      </TouchableOpacity>
      <Modal ref={modalizeRef} phoneNumber="09812312323" />
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: DIMENSION.avoidStatusBarDistance,
    paddingHorizontal: scale(16)
  }
})
