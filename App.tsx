import { DebuggerComponent } from '@dkamphuoc/react-native-debugger'
import { NetworksInspectorComponent, startNetworkLogging } from '@dkamphuoc/react-native-network-logger'
import * as SplashScreen from 'expo-splash-screen'
import React from 'react'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RecoilRoot, useRecoilState } from 'recoil'
import { useLoadFonts } from 'src/commons/hooks/useLoadFonts'
import { LoadingProvider } from 'src/components/LoadingPortal'
import colors from 'src/configs/colors'
import { AppProvider } from 'src/locales/AppContext'
import Navigator from 'src/navigation'
import { networkInspectorState } from 'src/recoil/networkInspector/atoms'
import { Host } from 'react-native-portalize'
SplashScreen.preventAutoHideAsync()
startNetworkLogging()

// setComponents({
//   View: View as any, // set your custom view here
//   Text: Text as any // set your custom view text
// })

// dLog.setup({
//   enabled: true,
//   ws: 'ws://172.16.14.248:8089' // bắn log ra máy khác (cần bật server máy đó lên)
// })

function AppContainer() {
  const [networkInspector] = useRecoilState(networkInspectorState)

  return (
    <AppProvider colors={colors}>
      <LoadingProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Host>
            <Navigator />
            {(__DEV__ || networkInspector.isEnableNetworkInspector) && (
              <DebuggerComponent
                flexBottom={1.5}
                initData={{
                  enable: true
                }}
                tabs={[
                  {
                    title: 'network inspector',
                    component: <NetworksInspectorComponent />
                  }
                ]}
              />
            )}
          </Host>
        </GestureHandlerRootView>
      </LoadingProvider>
    </AppProvider>
  )
}

export default function App() {
  useLoadFonts()

  // useEffect(() => {
  // obsDebugger.next() // set current network to local
  // get current network from local
  // const e = obsDebugger.subscriber(d => {
  //   JSON.stringify(d)
  // })
  // return () => {
  //   e()
  // }
  // }, [])
  return (
    <RecoilRoot>
      <AppContainer />
    </RecoilRoot>
  )
}
