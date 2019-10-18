import { Reducer } from 'redux'

import FiltersActionTypes from './actionTypes'
import IFilterActions from './types'

interface IFiltersState {
  readonly textSearch: string
  readonly startDate: Date | null
  readonly endDate: Date | null
  readonly page: number
}
const filtersInitialState: IFiltersState = {
  textSearch: '',
  startDate: null,
  endDate: null,
  page: 0,
}

type IFiltersReducer = Reducer<IFiltersState, IFilterActions>
const filtersReducer: IFiltersReducer = (
  state = filtersInitialState,
  { type, payload }
) => {
  switch (type) {
    case FiltersActionTypes.SET_TEXT_SEARCH:
      return {
        ...state,
        textSearch: payload as string,
        page: 0,
      }
    case FiltersActionTypes.SET_START_DATE:
      return {
        ...state,
        startDate: payload as Date | null,
        page: 0,
      }
    case FiltersActionTypes.SET_END_DATE:
      return {
        ...state,
        endDate: payload as Date | null,
        page: 0,
      }
    case FiltersActionTypes.SET_PAGE:
      return {
        ...state,
        page: payload as number,
      }
    default:
      return state
  }
}

export default filtersReducer
