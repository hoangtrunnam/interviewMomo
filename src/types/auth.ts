export interface IDataLogin {
  user: IUser
  token: Token
}

export interface IUser {
  id: number
  createdDate: string
  modifiedDate: string
  deletedDate: any
  isDeleted: boolean
  createdBy: any
  modifiedBy: any
  deletedBy: any
  email: string
  userName: any
  name: any
  numberPhone: any
  positionId: any
  role: string
}

export interface Token {
  token: string
  expiresIn: string
}
