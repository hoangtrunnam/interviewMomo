import { StyleProp, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  ImageContentFit,
  ImageErrorEventData,
  ImageProps,
  ImageSource,
  ImageStyle,
  ImageTransition,
  Image
} from 'expo-image'
import { IMAGES } from 'src/assets/images'

export type TImage = ImageProps &
  React.PropsWithChildren & {
    source: string
    style?: StyleProp<ImageStyle>
    contentFit?: ImageContentFit
    transition?: number | ImageTransition | null | undefined
    placeholder?: ImageSource | string | number | ImageSource[] | string[] | null
    cachePolicy?: 'none' | 'disk' | 'memory' | 'memory-disk' | null | undefined
    enableLiveTextInteraction?: boolean
  }

const ExpoImage = (props: TImage) => {
  const {
    source,
    children,
    style,
    contentFit = 'cover',
    transition = 1000,
    placeholder = { blurhash: 'LUF5,F-;E2M|~Xt7IpWBIrIpW=s:' },
    cachePolicy = 'memory',
    enableLiveTextInteraction = true
  } = props

  const [error, setError] = useState<boolean>(false)

  const handleErrorImage = (e: ImageErrorEventData) => {
    if (e.error) {
      setError(true)
    }
  }

  const clearCache = async () => {
    const res = await Image.clearMemoryCache()
    console.log('🚀 ~ clearCache ~ res:', res)
  }

  useEffect(() => {
    return () => {
      clearCache()
    }
  }, [])

  return (
    <Image
      {...props}
      style={[styles.image, style]}
      source={error ? IMAGES.imageNotLoaded : source}
      contentFit={contentFit}
      transition={transition}
      placeholder={placeholder}
      cachePolicy={cachePolicy}
      enableLiveTextInteraction={enableLiveTextInteraction}
      onError={handleErrorImage}
      //
    >
      {children}
    </Image>
  )
}

export default ExpoImage

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150
  }
})
