import { IDataLogin } from 'src/types/auth'
import { APIs } from './config'
import { handleError } from './handleError'
import request from './request'
import type { ApiResponse } from './types'

export const postLogin = async (email: string, password: string): Promise<ApiResponse<IDataLogin>> => {
  try {
    const body = {
      email,
      password
    }
    const result = await request().post(APIs.postLoginGprealEstate, body)
    const { status, data, code, message, user, token } = result.data
    return {
      status,
      data,
      code,
      message,
      user,
      token
    }
  } catch (error) {
    return handleError(error)
  }
}
