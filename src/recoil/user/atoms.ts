import { atom } from 'recoil'
import { TypeKeyAtom } from 'src/constants/defines'

export const userState = atom({
  key: TypeKeyAtom.userState,
  default: {}
})
