type TToken = {
  TOKEN: string
  REFRESH_TOKEN: string
}

export const TypeToken: TToken = {
  TOKEN: 'TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN'
}

export const TypeKeyAtom: Record<string, string> = {
  authState: 'authState',
  getAuthState: 'getAuthState',
  userState: 'userState',
  getUserState: 'getUserState',
  networkInspectorState: 'networkInspectorState',
  getNetworkInpectorState: 'getNetworkInpectorState'
}
