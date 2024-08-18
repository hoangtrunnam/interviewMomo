import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'src/components/Button'
import { Text } from 'src/components/Text'
import Contacts from 'src/features/TestApp/Momo/Contacts'

jest.mock('src/components/DefaultActionBar/CustomHeaderMomo', () => 'CustomHeaderMomo')
jest.mock('src/features/TestApp/Momo/ItemContact', () => 'ItemContact')
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve())
}))
describe('<Contacts />', () => {
  const mockDb = {}
  const mockListFriendContact = [
    { first_name: 'John', last_name: 'Doe', phone_number: '123456789', is_like: 0 },
    { first_name: 'Jane', last_name: 'Smith', phone_number: '987654321', is_like: 1 }
  ]

  test('renders tabs and switches between them correctly', () => {
    const { getByText, getByTestId, queryByTestId } = render(<Contacts />)

    const friendsTab = getByText('Bạn bè')
    const bankTab = getByText('Tài khoản ngân hàng')

    expect(friendsTab).toBeTruthy()
    expect(bankTab).toBeTruthy()

    expect(getByTestId('flashlist-container')).toBeTruthy()
    expect(queryByTestId('bank-container')).toBeNull()

    fireEvent.press(bankTab)

    expect(queryByTestId('flashlist-container')).toBeNull()
    expect(getByTestId('bank-container')).toBeTruthy()

    // Chuyển lại sang tab bbe
    fireEvent.press(friendsTab)

    // Kiểm tra FlashList được hiển thị lại
    expect(getByTestId('flashlist-container')).toBeTruthy()
    expect(queryByTestId('bank-container')).toBeNull()
  })

  test('renders FlashList with correct data', () => {
    const { getByTestId } = render(<Contacts />)
    const flashList = getByTestId('flashlist')
    expect(mockListFriendContact.length).toBe(2)
    expect(mockListFriendContact[0].first_name).toBe('John')
    expect(mockListFriendContact[1].first_name).toBe('Jane')
  })

  test('renders delete button in bank tab and handles click event', () => {
    const clearDatabaseMock = jest.fn()

    const { getByText } = render(
      <View>
        <Button
          onPress={async () => {
            clearDatabaseMock(mockDb)
          }}>
          <Text color="#fff" textAlign="center">
            Delete data
          </Text>
        </Button>
      </View>
    )

    const deleteButton = getByText('Delete data')
    fireEvent.press(deleteButton)

    expect(clearDatabaseMock).toHaveBeenCalledWith(mockDb)
  })
})
