import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { refNavigation } from './navigationHelper'
import MainStack from './MainStack'

const Navigator = () => {
  return (
    <NavigationContainer ref={refNavigation}>
      <MainStack />
    </NavigationContainer>
  )
}

export default Navigator
