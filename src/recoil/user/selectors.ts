import { selector } from 'recoil'
import { TypeKeyAtom } from 'src/constants/defines'
import { userState } from './atoms'

export const getUserState = selector({
  key: TypeKeyAtom.getUserState,
  get: ({ get }) => {
    const authData = get(userState)
    return authData
  }
})
