import filtersActionTypes from '../../store/filters/actionTypes'

import { setTextSearch, setStartDate, setEndDate } from '#actions'

it('should set the textSearch field with text value', () => {
  const text = 'test tring'
  const action = setTextSearch(text)
  expect(action).toEqual({
    type: filtersActionTypes.SET_TEXT_SEARCH,
    payload: text,
  })
})

it('should set the start date fro filters', () => {
  const newDate = new Date()
  const action = setStartDate(newDate)
  expect(action).toEqual({
    type: filtersActionTypes.SET_START_DATE,
    payload: newDate,
  })
})

it('should set the end date for filters', () => {
  const newDate = new Date()
  const action = setEndDate(newDate)
  expect(action).toEqual({
    type: filtersActionTypes.SET_END_DATE,
    payload: newDate,
  })
})
