import FiltersActionTypes from './actionTypes'
import IFilterActions from './types'

export const setTextSearch = (payload: string): IFilterActions => ({
  type: FiltersActionTypes.SET_TEXT_SEARCH,
  payload,
})

export const setStartDate = (payload: Date | null): IFilterActions => ({
  type: FiltersActionTypes.SET_START_DATE,
  payload,
})

export const setEndDate = (payload: Date | null): IFilterActions => ({
  type: FiltersActionTypes.SET_END_DATE,
  payload,
})

export const setPage = (payload: number): IFilterActions => ({
  type: FiltersActionTypes.SET_PAGE,
  payload,
})
