import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import CustomTabbar from './CustomTabbar'
import { routes } from './routes'
import type { BottomTabNavigationParamList } from './types'
import UserProfile from 'src/features/TestApp/UserProfile'
import Notifications from 'src/features/TestApp/Notifications'
import { useDisableBackRoute } from 'src/commons/hooks/useDisableBackRoute'
import Gift from 'src/features/TestApp/Gift'
import Home from 'src/features/TestApp/Home'

const Tab = createBottomTabNavigator<BottomTabNavigationParamList>()

const BottomTabFinal = () => {
  useDisableBackRoute()
  return (
    <Tab.Navigator
      detachInactiveScreens
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={(props: any) => <CustomTabbar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000234',
        tabBarInactiveTintColor: '#993243'
      }}
      initialRouteName={routes.Home}>
      <Tab.Screen name={routes.Home} component={Home} />
      <Tab.Screen name={routes.Notifications} component={Notifications} />
      <Tab.Screen name={routes.Gift} component={Gift} />
      <Tab.Screen name={routes.UserProfile} component={UserProfile} />
    </Tab.Navigator>
  )
}

export default BottomTabFinal
