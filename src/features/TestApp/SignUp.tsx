// /* eslint-disable react-native/no-inline-styles */
// import React, {useState} from 'react'
// import {View, ScrollView, Text, SafeAreaView} from 'react-native'
// import DefaultActionBar from 'src/components/DefaultActionBar'
// // import {Thumb} from 'src/components/Image'
// import InputForm from 'src/components/Input/InputForm'
// // import type {MainStackScreenNavigationProps} from 'src/navigation/types'

// // interface ISignUp extends MainStackScreenNavigationProps<'SignUp'> {}

// const SignUp = () => {
//   const [value, setValue] = useState<string>('')

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
//       <DefaultActionBar />
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#FFFFFF',
//         }}>
//         <ScrollView
//           style={{
//             flex: 1,
//             backgroundColor: '#ffffff',
//             paddingTop: 17,
//           }}>
//           <Text
//             style={{
//               color: '#000000',
//               fontSize: 24,
//               fontWeight: 'bold',
//               marginBottom: 26,
//               marginHorizontal: 141,
//             }}>
//             {'Đăng ký'}
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: 21,
//               marginHorizontal: 16,
//             }}>
//             <View
//               style={{
//                 width: 47,
//                 alignItems: 'center',
//                 backgroundColor: '#ffffff',
//                 borderColor: '#e5e5e5',
//                 borderRadius: 8,
//                 borderWidth: 1,
//                 paddingTop: 34,
//                 paddingBottom: 5,
//               }}>
//               <Text
//                 style={{
//                   color: '#333333',
//                   fontSize: 16,
//                 }}>
//                 {'_'}
//               </Text>
//             </View>
//             <View
//               style={{
//                 width: 47,
//                 alignItems: 'center',
//                 backgroundColor: '#ffffff',
//                 borderColor: '#e5e5e5',
//                 borderRadius: 8,
//                 borderWidth: 1,
//                 paddingTop: 34,
//                 paddingBottom: 5,
//               }}>
//               <Text
//                 style={{
//                   color: '#333333',
//                   fontSize: 16,
//                 }}>
//                 {'_'}
//               </Text>
//             </View>
//             <View
//               style={{
//                 width: 47,
//                 alignItems: 'center',
//                 backgroundColor: '#ffffff',
//                 borderColor: '#e5e5e5',
//                 borderRadius: 8,
//                 borderWidth: 1,
//                 paddingTop: 34,
//                 paddingBottom: 5,
//               }}>
//               <Text
//                 style={{
//                   color: '#333333',
//                   fontSize: 16,
//                 }}>
//                 {'_'}
//               </Text>
//             </View>
//             <View
//               style={{
//                 width: 47,
//                 alignItems: 'center',
//                 backgroundColor: '#ffffff',
//                 borderColor: '#e5e5e5',
//                 borderRadius: 8,
//                 borderWidth: 1,
//                 paddingTop: 34,
//                 paddingBottom: 5,
//               }}>
//               <Text
//                 style={{
//                   color: '#333333',
//                   fontSize: 16,
//                 }}>
//                 {'_'}
//               </Text>
//             </View>
//             <View
//               style={{
//                 width: 47,
//                 alignItems: 'center',
//                 backgroundColor: '#ffffff',
//                 borderColor: '#e5e5e5',
//                 borderRadius: 8,
//                 borderWidth: 1,
//                 paddingTop: 34,
//                 paddingBottom: 5,
//               }}>
//               <Text
//                 style={{
//                   color: '#333333',
//                   fontSize: 16,
//                 }}>
//                 {'_'}
//               </Text>
//             </View>
//             <View
//               style={{
//                 width: 47,
//                 alignItems: 'center',
//                 backgroundColor: '#ffffff',
//                 borderColor: '#e5e5e5',
//                 borderRadius: 8,
//                 borderWidth: 1,
//                 paddingTop: 34,
//                 paddingBottom: 5,
//               }}>
//               <Text
//                 style={{
//                   color: '#333333',
//                   fontSize: 16,
//                 }}>
//                 {'_'}
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               marginBottom: 17,
//               marginHorizontal: 17,
//             }}>
//             <Text
//               style={{
//                 color: '#808080',
//                 fontSize: 16,
//                 marginRight: 10,
//               }}>
//               {'Có thể gửi lại mã OTP sau'}
//             </Text>
//             <Text
//               style={{
//                 color: '#ff6e00',
//                 fontSize: 16,
//                 fontWeight: 'bold',
//                 flex: 1,
//               }}>
//               {'300s'}
//             </Text>
//           </View>
//           <InputForm
//             defaultValue={value}
//             password
//             label="password"
//             showSubLabel={false}
//             onChangeValue={setValue}
//           />
//           <Text
//             style={{
//               color: '#808080',
//               fontSize: 14,
//               marginBottom: 18,
//               marginHorizontal: 17,
//             }}>
//             {'Mật khẩu 8 kí tự trở lên (gồm cả chữ và số)'}
//           </Text>
//           <View
//             style={{
//               alignItems: 'center',
//               backgroundColor: '#333333',
//               borderRadius: 24,
//               paddingVertical: 18,
//               marginBottom: 180,
//               marginHorizontal: 16,
//             }}>
//             <Text
//               style={{
//                 color: '#ffffff',
//                 fontSize: 16,
//                 fontWeight: 'bold',
//               }}>
//               {'Hoàn thành'}
//             </Text>
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: 17,
//               marginHorizontal: 58,
//             }}>
//             <Text
//               style={{
//                 color: '#808080',
//                 fontSize: 16,
//               }}>
//               {'Đã có tài khoản?'}
//             </Text>
//             <Text
//               style={{
//                 color: '#ff6e00',
//                 fontSize: 16,
//                 fontWeight: 'bold',
//               }}>
//               {'Đăng nhập ngay'}
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default SignUp

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})
