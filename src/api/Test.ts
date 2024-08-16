import { APIs } from './config'
import { handleError } from './handleError'
import request from './request'
import type { ApiResponse } from './types'

export const testGetUser = async (): Promise<ApiResponse<any>> => {
  try {
    const result = await request().get(`${APIs.getAllCustomer}?page=1&take=20&filterText=n`)
    const { status, data, code, message } = result.data
    return {
      status,
      data,
      code,
      message
    }
  } catch (error) {
    return handleError(error)
  }
}

export const getListContactsFriend = async (): Promise<ApiResponse<any>> => {
  try {
    const result = await request().get(APIs.apiGetListContactsFriend)
    const { status, data, code, message, contacts } = result.data
    return {
      status,
      data,
      code,
      message,
      contacts
    }
  } catch (error) {
    return handleError(error)
  }
}
