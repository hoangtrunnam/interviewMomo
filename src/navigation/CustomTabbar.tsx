import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import Tab from './Tab'

export const BOTTOMTAB_HEIGHT = 68

const CustomTabbar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ position: 'absolute', bottom: -8, left: 0, right: 0 }}>
          <View style={styles.shadow}>
            <View
              style={{
                width: '100%',
                height: Platform.OS === 'ios' ? BOTTOMTAB_HEIGHT : 53,
                backgroundColor: '#ffffff'
              }}
            />
          </View>
        </View>
        <View style={styles.tabContainer}>
          {state.routes.map((route: any, index: any) => (
            <Tab
              key={index}
              {...{
                route,
                isFocused: state.index === index,
                options: descriptors[route.key].options,
                navigation
              }}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CustomTabbar

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
    // backgroundColor: 'red',
    // flex: 1,
  },
  shadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84
  },
  tabContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 65,
    justifyContent: 'space-between',
    marginTop: 'auto',
    padding: Platform.OS === 'ios' ? 15 : 0,
    width: '100%'
  }
})
