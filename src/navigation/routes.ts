import type { BottomTabNavigationParamList, DrawerTabNavigationParamList, RoutesType } from './types'

type Entries<T> = {
  [K in keyof T]: K
}

export const routes: Entries<RoutesType> = {
  DrawerTab: 'DrawerTab',
  Notifications: 'Notifications',
  BottomTab: 'BottomTab',
  // Screen moi tu day
  // Auth
  Gift: 'Gift',
  Home: 'Home',
  Login: 'Login',
  UserProfile: 'UserProfile',
  SignUp: 'SignUp',
  Dashboard: 'Dashboard',
  DetailCalender: 'DetailCalender',
  Contacts: 'Contacts'
}

export const routesBottomTab: Entries<BottomTabNavigationParamList> = {
  Home: 'Home',
  Gift: 'Gift',
  Notifications: 'Notifications',
  UserProfile: 'UserProfile'
}

export const routesDrawer: Entries<DrawerTabNavigationParamList> = {
  BottomTab: 'BottomTab'
}
