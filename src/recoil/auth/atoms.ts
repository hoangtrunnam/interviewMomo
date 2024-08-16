import { atom } from 'recoil'
import { TypeKeyAtom } from 'src/constants/defines'
import { IDataLogin } from 'src/types/auth'

export const authState = atom<IDataLogin>({
  key: TypeKeyAtom.authState,
  default: {
    user: {
      id: 0,
      createdDate: '',
      modifiedDate: '',
      deletedDate: undefined,
      isDeleted: false,
      createdBy: undefined,
      modifiedBy: undefined,
      deletedBy: undefined,
      email: '',
      userName: undefined,
      name: undefined,
      numberPhone: undefined,
      positionId: undefined,
      role: ''
    },
    token: {
      token: '',
      expiresIn: ''
    }
  }
})
