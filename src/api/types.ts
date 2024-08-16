import type { CancelTokenSource } from 'axios'
export interface IResponseApi<T> {
  success?: boolean
  data?: T
  message?: string
  status?: number | string
  page?: {
    current: number
    max: number
  }
  count?: number
}
export interface Category {
  [x: string]: any
}

export interface Profile {
  [x: string]: any
}

export interface IParamBase {
  authen?: string
  page?: number | string
  limit?: number | string
  id?: number | string
}

export interface Notification {
  id: number
  read?: boolean
  title?: string
  order_id: number | string
  notificationable_status?: string
  notification_id: number | string
  [x: string]: any
}
export interface PayloadBase extends IParamBase {
  cancelToken?: CancelTokenSource
  language?: string
  deviceLanguage?: boolean
}

export interface ApiResponse<T> extends IResponseApi<T> {
  [x: string]: any
  cancel?: boolean
  code: number
}
