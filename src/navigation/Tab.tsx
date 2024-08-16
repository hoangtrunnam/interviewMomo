import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { routes } from './routes'
import Ionicons from '@expo/vector-icons/Ionicons'
import { scale } from 'src/commons/dimension'
import { Text } from 'src/components/Text'

const Tab = ({
  isFocused,
  route,
  options,
  navigation
}: {
  isFocused: boolean
  route: any
  options: any
  navigation: any
}) => {
  const label = route.name || ''

  const renderIcon = () => {
    if (label === routes.Home) {
      return (
        <View style={styles.block}>
          <Ionicons name="home" size={32} color={isFocused ? 'blue' : 'black'} />
          <Text style={styles.textTab}>Home</Text>
        </View>
      )
    }
    if (label === routes.Notifications) {
      return (
        <View style={styles.block}>
          <Ionicons name="notifications" size={32} color={isFocused ? 'blue' : 'black'} />
          <Text style={styles.textTab}>Notification</Text>
        </View>
      )
    }
    if (label === routes.Gift) {
      return (
        <View style={styles.block}>
          <Ionicons name="gift" size={32} color={isFocused ? 'blue' : 'black'} />
          <Text style={styles.textTab}>Gift</Text>
        </View>
      )
    }
    if (label === routes.UserProfile) {
      return (
        <View style={styles.block}>
          <Ionicons name="person-sharp" size={32} color={isFocused ? 'blue' : 'black'} />
          <Text style={styles.textTab}>Profile</Text>
        </View>
      )
    }
    return null
  }
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key
    })
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name)
    }
  }

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key
    })
  }

  return (
    <>
      {label !== 'ClosedMessage' && (
        <TouchableOpacity
          activeOpacity={0.9}
          accessibilityRole="button"
          //   accessibilityStates={isFocused ? ['selected'] : []}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={styles.tab}>
          <View>{renderIcon()}</View>
        </TouchableOpacity>
      )}
    </>
  )
}
const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: scale(10)
  },
  textTab: {
    color: '#000',
    fontSize: scale(13)
  },
  block: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default memo(Tab)
