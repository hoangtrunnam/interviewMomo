import * as SecureStore from 'expo-secure-store'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { postLogin } from 'src/api/auth'
import InputForm from 'src/components/Input/InputForm'
import { useLoading } from 'src/components/LoadingPortal'
import { Text } from 'src/components/Text'
import { TypeToken } from 'src/constants/defines'
import { routes, routesBottomTab, routesDrawer } from 'src/navigation/routes'
import type { MainStackScreenNavigationProps } from 'src/navigation/types'
import { authState } from 'src/recoil/auth/atoms'
import { networkInspectorState } from 'src/recoil/networkInspector/atoms'

interface ILogin extends MainStackScreenNavigationProps<'Login'> {}

const Login = ({ navigation }: ILogin) => {
  const setDataLogin = useSetRecoilState(authState)
  const [networkInspector] = useRecoilState(networkInspectorState)
  const setTonggleNetworkInspector = useSetRecoilState(networkInspectorState)
  const { showLoading, hideLoading, setMessage } = useLoading()
  const [email, setEmail] = useState<string>('nam123@gmail.com')
  const [password, setPassword] = useState<string>('123456')

  const handleLogin = async () => {
    // showLoading()
    // setMessage('Đang đăng nhập, vui lòng chờ')
    // const res = await postLogin(email, password)
    navigation.navigate(routes.Contacts)
    // if (!!res.token.token) {
    //   setDataLogin(res as any)
    //   await SecureStore.setItemAsync(TypeToken.TOKEN, res.token.token)
    //   navigation.navigate(routes.DrawerTab, {
    //     screen: routesDrawer.BottomTab,
    //     params: {
    //       screen: routesBottomTab.Home
    //     }
    //   })
    // }
    // hideLoading()
  }
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          paddingHorizontal: 16
        }}>
        <Text>Login screen</Text>
        <InputForm onChangeValue={setEmail} label="email" defaultValue={email} autoComplete="email" />
        <InputForm onChangeValue={setPassword} label="password" defaultValue={password} password />
        <View style={{ backgroundColor: 'red', borderRadius: 16, marginTop: 16 }}>
          <TouchableOpacity
            style={{ padding: 8, alignItems: 'center', borderRadius: 16 }}
            onPress={handleLogin}
            onLongPress={() => {
              setTimeout(() => {
                if (!networkInspector.isEnableNetworkInspector) {
                  setTonggleNetworkInspector({ isEnableNetworkInspector: true })
                  return
                }
                setTonggleNetworkInspector({ isEnableNetworkInspector: false })
              }, 3000)
            }}>
            <Text style={{ color: '#fff', paddingVertical: 8 }} underline>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Login
