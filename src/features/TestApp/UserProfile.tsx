import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import type { MainStackScreenNavigationProps } from 'src/navigation/types'
// import {routes} from 'src/navigation/routes'

interface ILogin extends MainStackScreenNavigationProps<'UserProfile'> {}

const UserProfile = ({ navigation }: ILogin) => {
  const handleLogout = () => {
    navigation.popToTop()
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
