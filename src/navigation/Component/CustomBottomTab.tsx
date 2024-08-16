import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { routes } from '../routes'

const TAB_HEIGHT = Platform.OS === 'ios' ? 80 : 50

function TabShape() {
  return (
    <View>
      <Text>imga</Text>
    </View>
  )
}
const CustomBottomTab = ({ navigation }: BottomTabBarProps) => {
  // const { isLoggedIn } = useAppSelector(selectAuth)
  const handleNavigate = (route: string) => {
    navigation.navigate(routes.BottomTab, { screen: route })
  }

  return (
    <View
      style={{
        position: 'absolute',
        height: TAB_HEIGHT,
        width: Dimensions.get('window').width,
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 0.2,
        elevation: 5,
        bottom: 0
      }}>
      <TabShape />
      <View style={StyleSheet.absoluteFill}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            // alignItems: 'center',
            paddingTop: 12,
            justifyContent: 'space-between',
            paddingHorizontal: 16
          }}>
          <TouchableOpacity onPress={() => handleNavigate(routes.Home)}>
            <View>
              <Text>ok1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate(routes.Gift)}>
            <View>
              <Text>ok2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate(routes.Notifications)}>
            <Text>ok3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate(routes.UserProfile)}>
            <View>
              <Text>ok4</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default CustomBottomTab
