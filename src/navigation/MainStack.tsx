import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import { Platform } from 'react-native'
import { routes } from './routes'
import type { MainNavigationParamList } from './types'

import Notifications from 'src/features/TestApp/Notifications'
import UserProfile from 'src/features/TestApp/UserProfile'
import DrawerTab from './DrawerTab'
import BottomTabFinal from './BottomTabFinal'
import Login from 'src/features/TestApp/Login'
import Gift from 'src/features/TestApp/Gift'
import Home from 'src/features/TestApp/Home'
import DetailCalender from 'src/features/TestApp/DetailCalender'
const Stack = createStackNavigator<MainNavigationParamList>()

const MainStack: React.FC<any> = () => {
  const transitionPresets = Platform.OS === 'android' ? TransitionPresets.FadeFromBottomAndroid : {}
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          shadowColor: 'transparent'
        },
        ...transitionPresets
      }}
      initialRouteName={routes.Login}>
      <Stack.Screen
        name={routes.DrawerTab}
        component={DrawerTab}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name={routes.BottomTab}
        component={BottomTabFinal}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen name={routes.Notifications} component={Notifications} />
      <Stack.Screen name={routes.Login} component={Login} />
      <Stack.Screen name={routes.Gift} component={Gift} />
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name={routes.DetailCalender} component={DetailCalender} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default MainStack
