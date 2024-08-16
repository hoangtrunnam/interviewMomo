/**
 * Function xoá số 0 của phone
 * @param phone
 * @returns
 */
export const removePhonePrefix = (phone: string) => {
  let convertPhone = phone

  const getFirstCap = phone[0]

  if (getFirstCap === '0') {
    convertPhone = phone.substring(1)
  }

  return convertPhone
}

/** Function convert số 0 thành +84 */
export const convertPhonePrefix = (phone: string = '') => {
  let convertPhone = phone
  const getFirstCap = phone[0]
  if (getFirstCap === '0') {
    convertPhone = `+84${phone.substring(1)}`
  }
  return convertPhone
}

/** Function convert số 0 thành +84 */
export const convertPhone = (phone: string = '') => {
  let cvPhone = phone
  const getFirstCap = phone[0]
  if (getFirstCap === '0') {
    cvPhone = `84${phone.substring(1)}`
  }
  return cvPhone
}

export const spaceBetweenPhone = (number: string) => {
  return number.replace(/\D*(\d{4})\D*(\d{3})\D*(\d{3})\D*/, '$1 $2 $3')
}

/** Function convert số 84 thành 0 */
export const convertPrefixPhoneNumber = (value?: string): string => {
  if (!value) return ''
  return value.replace('84', '0')
}

export const validatePhoneNumber = (phoneNumberString?: number | string): boolean => {
  if (!phoneNumberString) return false
  const phoneNumberRex = /(84|0)+([56|58|92])+([0-9]{8})\b/g
  return phoneNumberRex.test(phoneNumberString.toString())
}

export const convertPhoneContact = (phoneContact: any) => {
  const phone = phoneContact?.phoneNumbers
  const name = `${phoneContact?.givenName} ${phoneContact?.familyName}`

  return {
    recordID: phoneContact?.recordID,
    phone: phone[0]?.number,
    name,
    isVnm: validatePhoneNumber(phone[0]?.number)
  }
}

export const TransferPercents = (number_one: number = 0, number_two: number = 100): string => {
  if (number_two === 0) {
    return '0.00%'
  }
  const percent = Math.round(number_one * 100) / number_two
  return `${percent.toFixed(2)}%`.replaceAll('.', ',')
}

export const formatPhoneNumber = (phoneNumberString: string | number): string => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/)
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`
  }
  return ''
}

export const formatPhoneNumberNature = (phoneNumberString: string | number, nature: string = '84'): string => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '').slice(1, 10)
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{4})$/)
  if (match) {
    return `+${nature}${match[1]} ${match[2]} ${match[3]}`
  }
  return ''
}
