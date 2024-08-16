import moment from 'moment'
import React, { useCallback, useImperativeHandle, useRef, useState } from 'react'
// components
import CalendarList from './CalendarList'
// data
import { LOCALE, LOCALE_TYPE } from './Utils/locale'

export interface Style {
  container?: {}
  monthContainer?: {}
  weekContainer?: {}
  monthNameText?: {}
  dayNameText?: {}
  dayText?: {}
  dayTextColor?: string
  holidayColor?: string
  todayColor?: string
  disabledTextColor?: string
  selectedDayTextColor?: string
  selectedDayBackgroundColor?: string
  selectedBetweenDayTextColor?: string
  selectedBetweenDayBackgroundTextColor?: string
}
interface onChangeParams {
  startDate: string | null
  endDate: string | null
}

interface Props {
  pastYearRange?: number
  futureYearRange?: number
  locale?: LOCALE_TYPE
  startDate?: string
  endDate?: string
  onChange: (params: onChangeParams | any) => void
  style?: Style
  singleSelectMode?: boolean
  initialNumToRender?: number
  flatListProps?: any
  isMonthFirst?: boolean
  disabledBeforeToday?: boolean
}

const Index = React.forwardRef<any, Props>((props, ref) => {
  const {
    pastYearRange = 1,
    futureYearRange = 2,
    initialNumToRender = 7,
    locale = LOCALE,
    startDate: prevStartDate,
    endDate: prevEndDate,
    onChange,
    style,
    singleSelectMode,
    flatListProps,
    isMonthFirst,
    disabledBeforeToday
  } = props
  const [dateStart, setDateStart] = useState(prevStartDate || null)
  const [dateEnd, setDateEnd] = useState(prevEndDate || null)
  const startDateRef: any = useRef(null)
  const endDateRef: any = useRef(null)

  const handleSetStartDate = useCallback(
    (startDate: string) => {
      setDateStart(startDate)
      setDateEnd(null)
      startDateRef.current = startDate
      endDateRef.current = null
      if (singleSelectMode) {
        onChange(startDate)
      } else {
        onChange({ startDate, endDate: null })
      }
    },
    [onChange, singleSelectMode]
  )

  const handleSetEndDate = useCallback(
    (startDate: string, endDate: string) => {
      setDateEnd(endDate)
      endDateRef.current = endDate
      onChange({ startDate, endDate })
    },
    [onChange]
  )
  useImperativeHandle(
    ref,
    () => ({
      refreshDate: () => {
        handleSetEndDate('', '')
        handleSetStartDate('')
      }
    }),
    [handleSetEndDate, handleSetStartDate]
  )
  const handlePress = (date: string) => {
    if (singleSelectMode) {
      handleSetStartDate(date)
      return
    }
    if (!startDateRef.current && !endDateRef.current) {
      handleSetStartDate(date)
      return
    }

    if (startDateRef.current && endDateRef.current) {
      handleSetStartDate(date)
      return
    }

    if (startDateRef.current) {
      if (moment(date).isBefore(startDateRef.current)) {
        handleSetStartDate(date)
      } else {
        handleSetEndDate(startDateRef.current, date)
      }
    }
  }

  return (
    <CalendarList
      initialNumToRender={initialNumToRender}
      pastYearRange={pastYearRange}
      futureYearRange={futureYearRange}
      locale={locale}
      handlePress={handlePress}
      startDate={dateStart}
      endDate={dateEnd}
      style={style}
      flatListProps={flatListProps}
      isMonthFirst={isMonthFirst}
      disabledBeforeToday={disabledBeforeToday}
    />
  )
})

export default Index
