import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, View, Text, Pressable, FlatList, TouchableOpacity } from 'react-native'
import { routes } from '../routes'
import { useNavigation } from '@react-navigation/native'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation()
  const handleLogout = async () => {
    try {
      navigation.navigate(routes.Login)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView testID="_drawerScrollView" nestedScrollEnabled={true} {...props}>
        <Text style={styles.sectionTitle}>メニュー</Text>
        <View style={styles.contactContainer}>
          <TouchableOpacity testID="_drawerHelpButton" onPress={() => {}}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>お問い合わせ</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.logoutContainer}>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>使い方マニュアル</Text>
          </View>
        </View>
        <View style={styles.logoutContainer}>
          <Pressable onPress={handleLogout}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>ログアウト</Text>
            </View>
          </Pressable>
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  categoryIcon: {
    height: 20,
    width: 20
  },
  categoryItem: {
    marginTop: 16
  },
  categoryItemContent: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20
  },
  categoryLabel: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 16
  },
  contactContainer: {
    marginTop: 64
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icon: {
    height: 20,
    width: 20
  },
  listItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20
  },
  listItemText: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 16
  },
  logoutContainer: {
    marginTop: 16
  },
  mainContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingBottom: 32,
    paddingHorizontal: 16
  },
  safeAreaView: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 16
  },
  zoneIcon: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
