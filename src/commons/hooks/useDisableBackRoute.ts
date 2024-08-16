import React from 'react'
import { BackHandler } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export const useDisableBackRoute = () => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true
      }
      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )

  return null
}
