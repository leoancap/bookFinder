import { Dispatch } from 'redux'

import { IBook } from '#domainTypes'
import BookActionTypes from './actionTypes'
import IBooksActions from './types'
import { api } from '#services'

export const fetchBookBegin = (payload?: undefined): IBooksActions => ({
  type: BookActionTypes.FETCH_BOOKS_BEGIN,
  payload,
})

export const fetchBooksSuccess = (payload: IBook[]): IBooksActions => ({
  type: BookActionTypes.FETCH_BOOKS_SUCCESS,
  payload,
})

export const fetchBooksFailure = (payload?: undefined): IBooksActions => ({
  type: BookActionTypes.FETCH_BOOKS_FAILURE,
  payload,
})

export const fetchBooks = () => async (dispatch: Dispatch<IBooksActions>) => {
  dispatch(fetchBookBegin())
  try {
    const books = await api.fetchBooks()
    dispatch(fetchBooksSuccess(books))
  } catch (_) {
    // Ignore error Object
    dispatch(fetchBooksFailure())
  }
}
