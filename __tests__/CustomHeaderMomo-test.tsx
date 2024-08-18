import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CustomHeaderMomo from 'src/components/DefaultActionBar/CustomHeaderMomo'

jest.mock('@expo/vector-icons/Ionicons', () => 'Ionicons')
jest.mock('expo-linear-gradient', () => {
  return {
    LinearGradient: ({ children }: any) => children
  }
})

describe('<CustomHeaderMomo />', () => {
  test('renders the search input and cancel button correctly', () => {
    const { getByPlaceholderText, getByText } = render(<CustomHeaderMomo />)

    const searchInput = getByPlaceholderText('Nhập tên, số điện thoại, số tài khoản')
    const cancelButton = getByText('Hủy')

    expect(searchInput).toBeTruthy()
    expect(cancelButton).toBeTruthy()
  })

  test('calls onChangeText when text is entered', () => {
    const mockOnChangeText = jest.fn()
    const { getByPlaceholderText } = render(<CustomHeaderMomo onChangeText={mockOnChangeText} />)

    const searchInput = getByPlaceholderText('Nhập tên, số điện thoại, số tài khoản')
    fireEvent.changeText(searchInput, 'Test Input')

    expect(mockOnChangeText).toHaveBeenCalledWith('Test Input')
  })

  test('clears the input and dismisses the keyboard when cancel button is pressed', () => {
    const { getByPlaceholderText, getByText } = render(<CustomHeaderMomo />)

    const searchInput = getByPlaceholderText('Nhập tên, số điện thoại, số tài khoản')
    fireEvent.changeText(searchInput, 'Test Input')

    const cancelButton = getByText('Hủy')
    fireEvent.press(cancelButton)

    expect(searchInput.props.value).toBe('')
  })
})
