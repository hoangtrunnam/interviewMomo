import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import { ActivityIndicator, Animated, Keyboard, StyleSheet, View } from 'react-native'
import { Text } from './Text'

const LoadingContext = createContext({
  showLoading: () => {},
  hideLoading: () => {},
  setMessage: (message: string, timeToShow?: number) => {}
})

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [show, setShow] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const textOpacity = useRef(new Animated.Value(0)).current
  const showMessageTimeout = useRef<NodeJS.Timeout | null>(null)
  const hideLoadingTimeout = useRef<NodeJS.Timeout | null>(null)
  const showing = useRef<boolean>(false)

  const clearMessageTimeout = () => {
    if (showMessageTimeout.current) {
      clearTimeout(showMessageTimeout.current)
      showMessageTimeout.current = null
    }
  }

  const clearLoadingTimeout = () => {
    if (hideLoadingTimeout.current) {
      clearTimeout(hideLoadingTimeout.current)
      hideLoadingTimeout.current = null
    }
  }

  const showLoading = () => {
    clearLoadingTimeout()
    if (!showing.current) {
      Keyboard.dismiss()
      showing.current = true
      setShow(true)
      if (!message) {
        showMessageTimeout.current = setTimeout(() => {
          setMessage('Xin vui lòng chờ trong giây lát')
        }, 5 * 1000)
      }
    }
  }

  const hideLoading = () => {
    if (showing.current) {
      hideLoadingTimeout.current = setTimeout(() => {
        showing.current = false
        setShow(false)
        setMessage('')
        clearMessageTimeout()
        clearLoadingTimeout()
      }, 500)
    }
  }

  // default sau 5s nếu vẫn chưa xử lý request xong thì sẽ hiện message lên
  const updateMessage = (newMessage: string, timeToShow = 5000) => {
    Animated.timing(textOpacity, {
      toValue: 0,
      duration: timeToShow,
      useNativeDriver: true
    }).start(() => {
      setMessage(newMessage)
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: timeToShow,
        useNativeDriver: true
      }).start()
    })
    clearMessageTimeout()
  }

  useEffect(() => {
    return () => {
      clearMessageTimeout()
      clearLoadingTimeout()
    }
  }, [])

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading, setMessage: updateMessage }}>
      {children}
      {show && (
        <View style={styles.overlay}>
          <View style={styles.subContainer}>
            <ActivityIndicator color="#FF6E00" size="large" />
            {message && <Text style={styles.text}>{message}</Text>}
          </View>
        </View>
      )}
    </LoadingContext.Provider>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subContainer: {
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    opacity: 1
  },
  text: {
    marginTop: 12
  }
})

// Custom hook để sử dụng Loading Context
export const useLoading = () => useContext(LoadingContext)
