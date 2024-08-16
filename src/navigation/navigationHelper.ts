// file này hỗ trợ xử lý navigaiton ngoài màn hình

// import React from 'react'
import { CommonActions, createNavigationContainerRef } from '@react-navigation/native'
import type { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { routes as routesApp } from './routes'
import type { RoutesType } from './types'

// export const refNavigation = React.createRef<any>()
export const refNavigation = createNavigationContainerRef<RoutesType>()
/**
 * func lấy ra thông tin màn hình trước khi đi vào màn hình đăng nhập
 * @return key: String
 */
export const getPreviousScreenKeyOfAuthStack: () => string | undefined = () => {
  // lấy ra toàn bộ state của navigation
  const routes = refNavigation.current?.getRootState()?.routes || []

  // tìm vị trí của AuthScreen

  const index = routes.findIndex((i: any) => i.name === routesApp.Login)

  if (index > 0) {
    return routes[index - 1].key
  }

  return undefined
}

/** func navigate tới màn hình chi tiết từ màn hình hiện tại khi click thông báo */
export const navigateToDetailHistoryFromCurrentScreen = () => {
  // refNavigation.current?.navigate(routesApp.DetailHistory, { id })
}

/** func navigate tới màn hình chi tiết nhà hàng từ màn hình hiện tại khi mở link share */
export const navigateToDetailStoreFromID = () => {
  // const currentId = Number(id)
  // refNavigation.current?.navigate(routesApp.Restaurant, { id: currentId })
}

/** func navigate tới màn hình nào đó từ màn hình hiện tại
 * @param routerName tên màn hình cần nvigate đến
 */
// export const navigateFromCurrentScreen = (router: string, params?: any) => {
//   refNavigation.current?.navigate(router, params)
// }
export const navigateFromCurrentScreen = (
  router: keyof RoutesType,
  params?: StackScreenProps<RoutesType>['route']['params']
) => {
  if (refNavigation.isReady()) {
    refNavigation.dispatch(CommonActions.navigate(router, params))
  }
}
