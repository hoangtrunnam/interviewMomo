import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'

export const useLoadFonts = () => {
  const [loaded, error] = useFonts({
    'Mulish-Black': require('../../assets/fonts/Mulish-Black.ttf'),
    'Mulish-BlackItalic': require('../../assets/fonts/Mulish-BlackItalic.ttf'),
    'Mulish-Bold': require('../../assets/fonts/Mulish-Bold.ttf'),
    'Mulish-BoldItalic': require('../../assets/fonts/Mulish-BoldItalic.ttf'),
    'Mulish-ExtraBold': require('../../assets/fonts/Mulish-ExtraBold.ttf'),
    'Mulish-ExtraBoldItalic': require('../../assets/fonts/Mulish-ExtraBoldItalic.ttf'),
    'Mulish-ExtraLight': require('../../assets/fonts/Mulish-ExtraLight.ttf'),
    'Mulish-ExtraLightItalic': require('../../assets/fonts/Mulish-ExtraLightItalic.ttf'),
    'Mulish-Italic': require('../../assets/fonts/Mulish-Italic.ttf'),
    'Mulish-Light': require('../../assets/fonts/Mulish-Light.ttf'),
    'Mulish-LightItalic': require('../../assets/fonts/Mulish-LightItalic.ttf'),
    'Mulish-Medium': require('../../assets/fonts/Mulish-Medium.ttf'),
    'Mulish-MediumItalic': require('../../assets/fonts/Mulish-MediumItalic.ttf'),
    'Mulish-Regular': require('../../assets/fonts/Mulish-Regular.ttf'),
    'Mulish-SemiBold': require('../../assets/fonts/Mulish-SemiBold.ttf'),
    'Mulish-SemiBoldItalic': require('../../assets/fonts/Mulish-SemiBoldItalic.ttf')
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }
}
