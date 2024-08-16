import { selector } from 'recoil'
import { authState } from './atoms'
import { TypeKeyAtom } from 'src/constants/defines'

export const getAuthState = selector({
  key: TypeKeyAtom.getAuthState,
  get: ({ get }) => {
    const authData = get(authState)
    return authData
  }
})
