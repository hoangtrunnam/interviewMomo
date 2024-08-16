import i18n from 'i18n-js'
import * as RNLocalize from 'expo-localization'
import en from './en'
import vi from './vi'
import { ReactElement } from 'react'

i18n.translations = {
  en,
  vi
}

const locale = RNLocalize.getLocales()[0].languageCode || 'vi'
i18n.locale = locale

export default i18n

export type RNTextChildren = string | number | ReactElement

export function paramsLocalization(input: string, data?: Record<string, string | number>) {
  if (!data) {
    return input
  }
  const dataToArray = Object.entries(data)
  if (dataToArray.length === 0) {
    return input
  }
  let replacementInput = input || ''
  dataToArray.forEach(item => {
    const [key, value] = item
    replacementInput = replacementInput?.replace(`{${key}}`, value.toString())
  })
  return replacementInput
}

/**
 * Hàm `paramsLocalizationWithElement` được sử dụng để vừa dịch đa ngôn ngữ vừa style cho đoạn text con trong chuỗi.
 *
 * @param input - Chuỗi đầu vào chứa các giá trị cần được thay thế. Các giá trị này được định dạng bằng cặp dấu ngoặc nhọn `{}`.
 * @param data - (optional) Đối tượng chứa các giá trị thay thế cho các placeholder tương ứng. `RNTextChildren` có thể là một chuỗi, số, hoặc ReactElement.
 * @returns Trả về một mảng các phần tử (`RNTextChildren[]`) nếu có placeholder cần thay thế, hoặc trả về chuỗi ban đầu (`string`) nếu không có placeholder cần thay thế hoặc nếu không có đối tượng `data`.
 *
 * @example
 * đổi màu trạng thái statusOrder:
 * const input = "Hệ thống chưa ghi nhận giao dịch, đơn hàng của quý khách sẽ lên trạng thái {statusOrder}. Vui lòng theo dõi trạng thái đơn!";
 * const data = {
 *     statusOrder: <Text style={{ textAlign: 'center', lineHeight: 21 }} size={15} color={Colors.vipo.hex_ee0033} trans="checkout.status_pending" />,
 * };
 * const localizedText = paramsLocalizationWithElement(input, data);
 *
 * const YourComponent = () => {
 *     return (
 *         <Text>
 *             {localizedText}
 *         </Text>
 *     );
 * };
 * export default YourComponent;
 */

export function paramsLocalizationWithElement(
  input: string,
  data?: Record<string, RNTextChildren>
): RNTextChildren[] | string {
  try {
    if (!data) {
      return input
    }
    const keys = Object.keys(data)
    if (keys.length === 0) {
      return input
    }
    const dataWithBraces: Record<string, RNTextChildren> = {}
    const joinedKeys: string[] = []
    keys.forEach(key => {
      const keyWithBraces = `{${key}}`
      dataWithBraces[keyWithBraces] = data[key]
      joinedKeys.push(keyWithBraces)
    })
    const splitInput = input?.split(new RegExp(`(${joinedKeys.join('|')})`))
    return splitInput.map(e => {
      return dataWithBraces[e] || e
    })
  } catch (error) {
    return ''
  }
}
