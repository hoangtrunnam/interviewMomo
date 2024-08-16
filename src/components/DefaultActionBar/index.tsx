/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, TextStyle, TouchableWithoutFeedback, View } from 'react-native'
import HeaderTitle from './HeaderTitle'
import { Divide } from '../Divide'
import IconClose from 'src/assets/iconsSvg/IconClose'
import ArrowLeft from 'src/assets/iconsSvg/ArrowLeft'
import { DIMENSION } from 'src/commons/dimension'
import { Text } from '../Text'

interface IProps {
  title?: string
  titleColor?: string
  isIconLeftRounded?: boolean
  leftIconType?: 'IconClose' | 'back' | 'none' | 'wheel'
  sizeLeftIcon?: number
  colorLeftIcon?: string
  rightIconType?:
    | 'search'
    | 'IconMessage'
    | 'none'
    | 'threeDots'
    | 'addPeople'
    | 'heart'
    | 'filter'
    | 'share'
    | 'heartBold'
    | 'filterTick'
    | 'trash'
    | 'history'
  sizeRightIcon?: number
  rightText?: string
  rightTextStyle?: TextStyle
  onPressLeft?: () => void
  onPressRight?: () => void
  disabled?: boolean
  barStyle?: 'light-content' | 'dark-content' | 'default'
  background?: string
  colorRightIcon?: string
  titleLeft?: string
  backgroundLeftIcon?: string
  titleLeftColor?: string
  sizeTitle?: number
  textRightUnderLine?: boolean
  textRightColor?: string
  isLineFooter?: boolean
  testID?: string | undefined
}

const DefaultActionBar = React.forwardRef<any, IProps>((props: IProps, ref) => {
  const {
    title,
    titleColor = '#535353',
    isIconLeftRounded = false,
    leftIconType = 'back',
    rightIconType,
    rightText = '',
    rightTextStyle,
    onPressLeft,
    onPressRight,
    disabled,
    barStyle = 'dark-content',
    background = '#ffffff',
    titleLeft,
    backgroundLeftIcon = '#fff',
    titleLeftColor = '#000',
    sizeTitle = 20,
    textRightUnderLine = true,
    textRightColor,
    isLineFooter = true,
    testID = ''
  } = props

  const navigation = useNavigation()
  const renderLeftIcon = () => {
    switch (leftIconType) {
      case 'back':
        return <ArrowLeft color="#B7B7B7" width={16} height={16} />
      case 'IconClose':
        return <IconClose width={30} height={30} />
      case 'none':
        return null
      default:
        return null
    }
  }

  const renderRightIcon = () => {
    switch (rightIconType) {
      case 'IconMessage':
        return <IconClose width={24} height={24} />
      case 'threeDots':
        return (
          <View
            style={{
              marginRight: -16,
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <IconClose width={24} height={24} />
          </View>
        )
      case 'heart':
        return (
          <View
            style={{
              marginRight: -16,
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: backgroundLeftIcon,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <IconClose width={24} height={24} />
          </View>
        )
      default:
        return null
    }
  }
  const handleLeft = () => {
    if (onPressLeft) {
      return onPressLeft()
    }
    return navigation.goBack()
  }

  const handleRight = () => {
    if (onPressRight) {
      onPressRight()
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: background }}>
      <StatusBar translucent backgroundColor="transparent" barStyle={barStyle} />
      <View
        style={{
          marginTop: DIMENSION.topPadding - 10,
          flexDirection: 'row',
          width: '100%',
          height: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16
        }}
        ref={ref}
        {...props}>
        {!titleLeft ? (
          <TouchableWithoutFeedback disabled={leftIconType === 'none'} testID={`${testID}_goback`} onPress={handleLeft}>
            {leftIconType === 'none' ? (
              <View />
            ) : (
              <View
                testID="_btnGoback"
                style={{
                  backgroundColor: isIconLeftRounded ? '#ffffff' : 'transparent',
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: isIconLeftRounded ? 40 : 0
                }}>
                {renderLeftIcon()}
              </View>
            )}
          </TouchableWithoutFeedback>
        ) : (
          <HeaderTitle size={sizeTitle} title={titleLeft} titleColor={titleLeftColor} />
        )}

        <View
          style={[
            {
              position: 'absolute',
              height: '100%',
              top: 0,
              justifyContent: 'center',
              left: DIMENSION.width / 2
            },
            styles.ViewViewContainer
          ]}>
          <Text
            style={{
              fontSize: sizeTitle,
              color: titleColor,
              fontWeight: '500',
              textAlign: 'center',
              alignItems: 'stretch'
            }}>
            {title || ''}
          </Text>
        </View>
        <View>
          <TouchableWithoutFeedback disabled={disabled} onPressIn={handleRight}>
            {rightIconType === undefined ? (
              <View style={{ backgroundColor: 'transparent' }}>
                <Text
                  style={[
                    {
                      fontSize: 16,
                      textAlign: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '600',
                      color: textRightColor || undefined,
                      textDecorationLine: textRightUnderLine ? 'underline' : 'none'
                    },
                    rightTextStyle,
                    disabled && styles.txtDisabled
                  ]}>
                  {rightText}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 16,
                  alignItems: 'center'
                }}>
                {renderRightIcon()}
              </View>
            )}
          </TouchableWithoutFeedback>
        </View>
      </View>
      {isLineFooter ? <Divide size={1} color="#CBCBCB" /> : null}
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  ViewViewContainer: {
    transform: [
      {
        translateX: -((DIMENSION.width - (80 + 50)) / 2)
      }
    ],
    width: DIMENSION.width - (80 + 50)
  },
  backIcon: {
    lineHeight: 30
    // marginHorizontal: 10,
  },
  txtDisabled: {
    opacity: 0.5
  }
})

export default DefaultActionBar
