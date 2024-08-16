import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import type { StackScreenProps } from '@react-navigation/stack'

export type BottomTabNavigationParamList = {
  Home: undefined
  Gift: undefined
  Notifications: undefined
  UserProfile: undefined
}

export type MainNavigationParamList = {
  DrawerTab: NavigatorScreenParams<DrawerTabNavigationParamList>
  BottomTab: NavigatorScreenParams<BottomTabNavigationParamList>
  Notifications: undefined

  // Screen moi tu day
  Login: undefined
  Gift: undefined
  SignUp: undefined
  UserProfile: undefined
  Dashboard: undefined
  DetailCalender: undefined
  Contacts: undefined
}

export type RoutesType = BottomTabNavigationParamList & MainNavigationParamList

export type BottomScreenNavigationProps<T extends keyof BottomTabNavigationParamList> = CompositeScreenProps<
  BottomTabScreenProps<BottomTabNavigationParamList, T>,
  MainStackScreenNavigationProps<keyof MainNavigationParamList>
>

export type MainStackScreenNavigationProps<T extends keyof MainNavigationParamList> = StackScreenProps<
  MainNavigationParamList,
  T
>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainNavigationParamList {}
  }
}

export type DrawerTabNavigationParamList = {
  BottomTab: NavigatorScreenParams<BottomTabNavigationParamList>
}
