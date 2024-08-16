// /* eslint-disable react-native/no-inline-styles */
// import React, {useImperativeHandle, useState} from 'react'
// import {View, Text} from 'react-native'
// import type {Modalize} from 'react-native-modalize'
// import IconClose from 'src/assets/icons/IconClose'
// import {LinearGradientButton} from 'src/components/Button/LinearGradientButton'
// import {TouchRippleSingle} from 'src/components/Button/TouchRippleSingle'
// import BottomPopupModalize from 'src/components/PopupModal/BottomPopupModalize'
// import {defaultColors} from 'src/configs/colors'

// const mockup_data = [
//   {id: 1, title: 'Giáo dục'},
//   {id: 2, title: 'Giải trí'},
//   {id: 3, title: 'Hội thảo'},
//   {id: 4, title: 'Triển lãm'},
//   {id: 5, title: 'Hội chợ'},
//   {id: 6, title: 'Lễ hội'},
// ]

// const ModalTest = React.forwardRef((_props, ref) => {
//   const refModal = React.useRef<Modalize>(null)
//   const [choosedType, setChoosedType] = useState<any[]>([])

//   const handleSelectType = (type: any) => {
//     if (!choosedType.includes(type)) {
//       setChoosedType(state => [...state, type])
//     } else {
//       setChoosedType(state => [...state.filter(e => e !== type)])
//     }
//   }
//   useImperativeHandle(
//     ref,
//     () => ({
//       openModal: () => {
//         refModal.current?.open()
//       },
//       closeModal: () => {
//         refModal.current?.close()
//       },
//     }),
//     []
//   )
//   return (
//     <BottomPopupModalize
//       ref={refModal}
//       modalizeProps={{
//         handlePosition: 'inside',
//         HeaderComponent: (
//           <View
//             style={{
//               flexDirection: 'row',
//               paddingTop: 32,
//               paddingBottom: 16,
//               alignItems: 'center',
//               paddingHorizontal: 16,
//               justifyContent: 'space-between',
//             }}>
//             <View>
//               <TouchRippleSingle onPress={() => refModal.current?.close()}>
//                 <IconClose />
//               </TouchRippleSingle>
//             </View>
//             <Text style={{fontSize: 16, fontWeight: '600', color: defaultColors.inkViolet500}}>
//               Bộ lọc
//             </Text>
//             <View>
//               <IconClose color={defaultColors.h_ffffff} />
//             </View>
//           </View>
//         ),
//         FooterComponent: (
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               paddingHorizontal: 16,
//               paddingBottom: 50,
//             }}>
//             <View style={{paddingHorizontal: 16, paddingVertical: 12}}>
//               <Text
//                 style={{
//                   fontSize: 16,
//                   fontWeight: '600',
//                   color: defaultColors.inkViolet500,
//                   textDecorationLine: 'underline',
//                 }}>
//                 Xoá
//               </Text>
//             </View>
//             <LinearGradientButton onPress={() => {}}>
//               <View style={{paddingHorizontal: 16, paddingVertical: 12, borderRadius: 8}}>
//                 <Text style={{fontSize: 16, fontWeight: '600', color: defaultColors.h_ffffff}}>
//                   Áp dụng
//                 </Text>
//               </View>
//             </LinearGradientButton>
//           </View>
//         ),
//       }}>
//       <View style={{marginTop: 32, paddingHorizontal: 16}}>
//         <Text style={{fontSize: 20, fontWeight: '700', color: defaultColors.inkViolet500}}>
//           Loại sự kiện
//         </Text>
//         <View style={{marginTop: 4}}>
//           {mockup_data.map(item => (
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 marginTop: 12,
//               }}
//               key={String(item.id)}>
//               <Text style={{fontSize: 16, fontWeight: '600', color: defaultColors.inkViolet400}}>
//                 {item.title}
//               </Text>
//               <TouchRippleSingle onPress={() => handleSelectType(String(item.id))}>
//                 {choosedType.includes(String(item.id)) ? (
//                   <Text>checked</Text>
//                 ) : (
//                   <Text>unChecked</Text>
//                 )}
//               </TouchRippleSingle>
//             </View>
//           ))}
//         </View>
//       </View>
//     </BottomPopupModalize>
//   )
// })

// export default ModalTest

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalTest = () => {
  return (
    <View>
      <Text>ModalTest</Text>
    </View>
  )
}

export default ModalTest

const styles = StyleSheet.create({})
