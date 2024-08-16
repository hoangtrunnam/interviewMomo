// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier', 'plugin:react-native/all'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    'react-native/no-inline-styles': 'warn', // Cảnh báo cho inline styles
    'react-native/no-color-literals': 'off', // Tắt cảnh báo cho color inline styles
    'react-native/no-unused-styles': 'warn', // Cảnh báo cho style không dùng
    'react-native/sort-styles': 0, // turn off sort style
    'react-native/no-single-element-style-arrays': 1 // warning style={[styles.textTab]} 0: off, 1: warning, 2: error
  }
}
