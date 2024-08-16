// /* eslint-disable react-native/no-inline-styles */
// import {View} from 'react-native'
// import React, {useRef} from 'react'
// import Calendar from 'src/components/Calendar/src'
// import {defaultColors} from 'src/configs/colors'
// import DefaultActionBar from 'src/components/DefaultActionBar'

// const CUSTOM_LOCALE = {
//   monthNames: [
//     'january',
//     'february',
//     'march',
//     'april',
//     'may',
//     'june',
//     'july',
//     'august',
//     'september',
//     'october',
//     'november',
//     'december',
//   ],
//   dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//   today: '',
//   year: '', // letter behind year number -> 2020{year}
// }

// const DetailCalender = () => {
//   const refDate = useRef<any>(null)

//   const handleSelectDate = (startDate: moment.MomentInput, endDate: moment.MomentInput) => {
//     console.log('startDate', startDate)
//     console.log('endDate', endDate)
//   }
//   return (
//     <View style={{backgroundColor: defaultColors.h_ffffff, flex: 1}}>
//       <DefaultActionBar title="date range picker" />
//       <Calendar
//         ref={refDate}
//         locale={CUSTOM_LOCALE}
//         startDate=""
//         endDate=""
//         onChange={({startDate, endDate}) => handleSelectDate(startDate, endDate)}
//         isMonthFirst
//         style={{
//           selectedDayBackgroundColor: defaultColors.PrimaryA500,
//           holidayColor: defaultColors.h_000000,
//           dayTextColor: defaultColors.h_000000,
//           monthNameText: {
//             color: defaultColors.h_000000,
//             fontWeight: '600',
//             fontSize: 16,
//           },
//           monthContainer: {
//             backgroundColor: defaultColors.h_ffffff,
//           },
//         }}
//       />
//     </View>
//   )
// }

// export default DetailCalender
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailCalender = () => {
  return (
    <View>
      <Text>DetailCalender</Text>
    </View>
  )
}

export default DetailCalender

const styles = StyleSheet.create({})
