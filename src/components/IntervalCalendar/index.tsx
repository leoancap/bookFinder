import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { GoCalendar } from 'react-icons/go'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { setEndDate, setStartDate } from '#actions'
import { IAppActions, IAppState } from '#storeTypes'
import {
  Container,
  DatesInputWrapper,
  Divider,
  EndDate,
  StartDate,
} from './styles'

interface IDispatchToProps {
  setStartDateDispatch: (payload: Date | null) => void
  setEndDateDispatch: (payload: Date | null) => void
}

interface IStateToProps {
  startDate: Date | null
  endDate: Date | null
}

type IProps = IDispatchToProps & IStateToProps

function IntervalCalendarComponent({
  setStartDateDispatch,
  setEndDateDispatch,
  startDate,
  endDate,
}: IProps) {
  function handleStartDateChange(date: Date) {
    setStartDateDispatch(date)
  }

  function handleEndDateChange(date: Date) {
    setEndDateDispatch(date)
  }

  return (
    <Container>
      <DatesInputWrapper>
        <StartDate>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            onYearChange={handleStartDateChange}
            dateFormat='yyyy'
            showMonthYearPicker
            className='startDate'
          />
          <GoCalendar></GoCalendar>
        </StartDate>
        <Divider>até</Divider>
        <EndDate>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            onYearChange={handleEndDateChange}
            dateFormat='yyyy'
            showMonthYearPicker
            className='endDate'
          />
          <GoCalendar></GoCalendar>
        </EndDate>
      </DatesInputWrapper>
    </Container>
  )
}

const mapStateToProps = ({
  filtersReducer: { textSearch, page, startDate, endDate },
  booksReducer: { books },
}: IAppState): IStateToProps => ({
  startDate,
  endDate,
})

const mapDispatchToProps = (
  dispatch: Dispatch<IAppActions>
): IDispatchToProps => ({
  setStartDateDispatch: startDate => dispatch(setStartDate(startDate)),
  setEndDateDispatch: endDate => dispatch(setEndDate(endDate)),
})

export const IntervalCalendar = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntervalCalendarComponent)
export default IntervalCalendar
