import { AnyAction } from 'redux'

import FilterActionTypes from './actionTypes'

interface ISetTextSearch extends AnyAction {
  type: FilterActionTypes.SET_TEXT_SEARCH
  payload: string
}

interface ISetStartDate extends AnyAction {
  type: FilterActionTypes.SET_START_DATE
  payload: Date | null
}

interface ISetEndDate extends AnyAction {
  type: FilterActionTypes.SET_END_DATE
  payload: Date | null
}

interface ISetPage extends AnyAction {
  type: FilterActionTypes.SET_PAGE
  payload: number
}

// Action Union for Filters Actions
type IFilterActions = ISetTextSearch | ISetStartDate | ISetEndDate | ISetPage
export default IFilterActions
