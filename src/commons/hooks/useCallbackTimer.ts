import { useCallback, useRef } from 'react'

type CallbackFunction = (...params: unknown[]) => void

export const useCallbackTimer = (func: CallbackFunction, timeout: number = 1000) => {
  const ref = useRef<{ click: boolean }>({
    click: false
  }).current
  const callback = useCallback(
    (...params: unknown[]) => {
      if (ref.click) return

      ref.click = true
      setTimeout(() => {
        ref.click = false
      }, timeout)

      func(...params)
    },
    [func, timeout]
  )

  return callback
}
