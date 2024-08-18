import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import type { MainStackScreenNavigationProps } from 'src/navigation/types'
import { StackActions, useNavigation } from '@react-navigation/native'
// import {routes} from 'src/navigation/routes'

const UserProfile = () => {
  const navigation = useNavigation()
  const handleLogout = () => {
    navigation.dispatch(StackActions.popToTop())
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>UserProfile</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>press here to logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserProfile
