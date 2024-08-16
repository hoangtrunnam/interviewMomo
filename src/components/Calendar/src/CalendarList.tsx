import moment from 'moment'
import React, { useCallback, useMemo } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import type { Style } from './index'
import Month from './Month'
import { getMonths, Month_Type } from './Utils/data'
import type { LOCALE_TYPE } from './Utils/locale'
import { defaultColors } from 'src/configs/colors'

interface Props {
  pastYearRange: number
  futureYearRange: number
  initialNumToRender: number
  locale: LOCALE_TYPE
  handlePress: (date: string) => void
  startDate: string | null
  endDate: string | null
  style?: Style
  flatListProps?: any
  isMonthFirst?: boolean
  disabledBeforeToday?: boolean
}

const LAYOUT_HEIGHT = 370
const CalendarList = ({
  pastYearRange,
  futureYearRange,
  initialNumToRender,
  locale,
  handlePress,
  startDate,
  endDate,
  flatListProps,
  isMonthFirst,
  disabledBeforeToday,
  style
}: Props) => {
  const months: Month_Type[] = useMemo(
    () => getMonths(pastYearRange, futureYearRange),
    [pastYearRange, futureYearRange]
  )
  const getInitialIndex = useCallback(() => {
    return months.findIndex((month: Month_Type) => {
      const targetDate = startDate ? moment(startDate) : moment()
      return month.id === targetDate.format('YYYY-MM')
    })
  }, [months, startDate]) // []

  const handleRenderItem = useCallback(
    ({ item }: any) => (
      <View
        style={{
          height: LAYOUT_HEIGHT,
          backgroundColor: defaultColors.h_ffffff
        }}>
        <Month
          item={item}
          locale={locale}
          handlePress={handlePress}
          startDate={startDate}
          endDate={endDate}
          isMonthFirst={isMonthFirst}
          disabledBeforeToday={disabledBeforeToday}
          style={style}
        />
      </View>
    ),
    [locale, handlePress, startDate, endDate, isMonthFirst, disabledBeforeToday, style] // locale.today, startDate, endDate
  )

  return (
    <View style={[{ position: 'relative' }, style?.container]}>
      <View
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <ActivityIndicator />
      </View>
      <FlatList
        keyExtractor={(item: Month_Type) => item.id}
        data={months}
        renderItem={handleRenderItem}
        getItemLayout={(_, index) => ({
          length: LAYOUT_HEIGHT,
          offset: LAYOUT_HEIGHT * index,
          index
        })}
        initialScrollIndex={getInitialIndex()}
        initialNumToRender={initialNumToRender}
        {...flatListProps}
      />
    </View>
  )
}

export default CalendarList
