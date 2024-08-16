/* eslint-disable react/no-unstable-nested-components */
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { routes } from './routes'
import CustomDrawer from './Component/CustomDrawer'
import { useDisableBackRoute } from 'src/commons/hooks/useDisableBackRoute'
import Dashboard from 'src/features/TestApp/Dashboard'
import BottomTabFinal from './BottomTabFinal'

const Drawer = createDrawerNavigator()

const DrawerTab = () => {
  useDisableBackRoute()
  return (
    <Drawer.Navigator
      initialRouteName={routes.BottomTab}
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        // swipeEdgeWidth: 0,
        drawerStyle: {
          width: '75%'
        }
        // drawerType: 'front',
        // swipeEdgeWidth: 0,
        // swipeEnabled: false,
      }}>
      <Drawer.Screen name={routes.BottomTab} component={BottomTabFinal} />
    </Drawer.Navigator>
  )
}

export default DrawerTab
