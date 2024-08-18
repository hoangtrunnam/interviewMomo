import { render } from '@testing-library/react-native'
import UserProfile from 'src/features/TestApp/UserProfile'

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn()
  }),
  useFocusEffect: jest.fn()
}))

describe('<UserProfile />', () => {
  test('Text renders correctly on UserProfile', () => {
    const { getByText } = render(<UserProfile />)
    const textLabel = getByText('UserProfile')
    expect(textLabel).toBeTruthy()
  })
})
