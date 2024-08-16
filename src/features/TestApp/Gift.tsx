import { View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { MainStackScreenNavigationProps } from 'src/navigation/types'
import { DrawerActions, StackActions, useNavigation } from '@react-navigation/native'
import { testGetUser } from 'src/api/Test'
import { clearToken, getToken } from 'src/api/core'
import { Text } from 'src/components/Text'
import { useColors, useLanguage, useTheme } from 'src/locales/AppContext'
import i18n from 'src/locales/i18n'
import { TouchRippleSingle } from 'src/components/Button/TouchRippleSingle'
import colors from 'src/configs/colors'
interface IGift extends MainStackScreenNavigationProps<'Gift'> {}

const Gift = () => {
  const navigation = useNavigation()
  const { setLanguage } = useLanguage()
  const setTheme = useTheme()
  const colors = useColors()
  const { t } = i18n
  const handleCallTestApi = async () => {
    const res = await testGetUser()
    if (res.code === 200) {
    }
    const resToken = await getToken()
  }

  const handleLogout = async () => {
    const res = await clearToken()
    navigation.dispatch(StackActions.popToTop())
  }

  useEffect(() => {
    handleCallTestApi()
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}>
      <TouchableOpacity
        style={{ padding: 8, alignItems: 'center', borderRadius: 16 }}
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer())
        }}>
        <Text>open drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 8, alignItems: 'center', borderRadius: 16, marginTop: 32 }}
        onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 8, alignItems: 'center', borderRadius: 16, marginTop: 32 }}
        onPress={handleCallTestApi}>
        <Text>{t('actions.done')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 8, alignItems: 'center', borderRadius: 16, marginTop: 32 }}
        onPress={handleCallTestApi}>
        <Text>{t('actions.done')}</Text>
      </TouchableOpacity>
      <View>
        <TouchRippleSingle
          onPress={() => {
            setLanguage('vi')
            setTheme('dark')
          }}>
          <Text>press to change to vi and dark theme</Text>
        </TouchRippleSingle>
      </View>
      <View>
        <TouchRippleSingle
          onPress={() => {
            setLanguage('en')
            setTheme('light')
          }}>
          <Text>press to change to en and light theme</Text>
        </TouchRippleSingle>
      </View>
      <Text semiBold size={30} underline trans={t('actions.done')} />
    </View>
  )
}

export default Gift
