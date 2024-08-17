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
export interface IDataContact {
  first_name: string
  last_name: string
  phoneNumber: string
  is_like?: number
}

export interface IDataContactSql {
  id: number
  first_name: string
  last_name: string
  phone_number: string
  is_like: number
}

export const fuseOptionsSearch = {
  keys: ['first_name', 'last_name', 'phone_number'],
  isCaseSensitive: false,
  includeScore: false,
  shouldSort: true,
  includeMatches: false,
  findAllMatches: false,
  minMatchCharLength: 1,
  location: 0,
  threshold: 0.6,
  distance: 100,
  useExtendedSearch: false,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1
}

export const listContact: IDataContact[] = [
  {
    first_name: 'Minh Tuấn',
    last_name: 'Nguyễn',
    phoneNumber: '0339480991'
  },
  {
    first_name: 'Hoàng Sơn',
    last_name: 'Phạm',
    phoneNumber: '0239480992'
  },
  {
    first_name: 'Ngọc Hoàng',
    last_name: 'Nguyễn',
    phoneNumber: '0359480993'
  },
  {
    first_name: 'Nguyễn Minh Tuấn',
    last_name: 'Hoàng',
    phoneNumber: '0339411994'
  },
  {
    first_name: 'Quỳnh',
    last_name: 'Trần',
    phoneNumber: '0339489915'
  },
  {
    first_name: 'Tùng',
    last_name: 'Hoàng',
    phoneNumber: '0379488996'
  },
  {
    first_name: 'Phúc Bảo',
    last_name: 'Đoàn',
    phoneNumber: '0239480987'
  },
  {
    first_name: 'Ngọc Thắng',
    last_name: 'Trần',
    phoneNumber: '0335120998'
  },
  {
    first_name: 'Việt Linh',
    last_name: 'Nguyễn',
    phoneNumber: '0390780999'
  },
  {
    first_name: 'Nhật Thu',
    last_name: 'Phạm',
    phoneNumber: '0321080993'
  },
  {
    first_name: 'Linh',
    last_name: 'Trần',
    phoneNumber: '0377480123'
  },
  {
    first_name: 'Thanh Tùng',
    last_name: 'Nguyễn',
    phoneNumber: '0348254781'
  },
  {
    first_name: 'Minh Đức',
    last_name: 'Nguyễn',
    phoneNumber: '038901675'
  },
  {
    first_name: 'Đức Ninh',
    last_name: 'Nguyễn',
    phoneNumber: '0347801257'
  },
  {
    first_name: 'Anh Tuấn',
    last_name: 'Hoàng',
    phoneNumber: '0129876321'
  },
  {
    first_name: 'Tuấn Kiệt',
    last_name: 'Tôn',
    phoneNumber: '0347767789'
  },
  {
    first_name: 'Quỳnh Anh',
    last_name: 'Nguyễn',
    phoneNumber: '0363458902'
  },
  {
    first_name: 'Đức Huy',
    last_name: 'Lê',
    phoneNumber: '0312175572'
  },
  {
    first_name: 'Mộng thường',
    last_name: 'Trần',
    phoneNumber: '03294105693'
  },
  {
    first_name: 'Trung Hiếu',
    last_name: 'Lê',
    phoneNumber: '0379580790'
  },
  {
    first_name: 'Sơn Tùng',
    last_name: 'Phạm',
    phoneNumber: '0339547193'
  }
]
