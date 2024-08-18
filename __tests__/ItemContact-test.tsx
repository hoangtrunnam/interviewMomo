import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ItemContact from 'src/features/TestApp/Momo/ItemContact'

// Mocking the Ionicons component
jest.mock('@expo/vector-icons/Ionicons', () => 'Ionicons')
jest.mock('src/components/Image', () => 'ExpoImage')
describe('<ItemContact />', () => {
  const mockProps = {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '123456789',
    isLike: 0,
    onPressIconHeart: jest.fn()
  }

  test('renders contact information correctly', () => {
    const { getByText } = render(<ItemContact {...mockProps} />)

    expect(getByText('Doe John')).toBeTruthy()
    expect(getByText('123456789')).toBeTruthy()
  })

  test('renders heart icon correctly', () => {
    const { getByTestId } = render(<ItemContact {...mockProps} />)
    const heartIcon = getByTestId('heart-icon')
    expect(heartIcon).toBeTruthy()
  })

  test('calls onPressIconHeart with correct phone number when heart icon is pressed', () => {
    const { getByTestId } = render(<ItemContact {...mockProps} />)

    const heartIcon = getByTestId('heart-icon')
    fireEvent.press(heartIcon)

    expect(mockProps.onPressIconHeart).toHaveBeenCalledWith('123456789')
  })
})
