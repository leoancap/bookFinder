// Global
import { Reducer } from 'redux'
// Local
import { LoadingStatus } from '../../constants'
import { IBook } from '#domainTypes'
import BooksActionTypes from './actionTypes'
import IBooksActions from './types'

interface IBooksState {
  readonly books: IBook[]
  readonly loadingStatus: LoadingStatus
}
const BooksInitialState: IBooksState = {
  books: [],
  loadingStatus: LoadingStatus.DONE,
}

const booksReducer: IBookReducer = (
  state = BooksInitialState,
  { type, payload }
) => {
  switch (type) {
    case BooksActionTypes.FETCH_BOOKS_BEGIN:
      return {
        ...state,
        loadingStatus: LoadingStatus.LOADING,
      }
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loadingStatus: LoadingStatus.DONE,
        books: payload as IBook[],
      }
    case BooksActionTypes.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loadingStatus: LoadingStatus.ERROR,
      }
    default:
      return state
  }
}

export type IBookReducer = Reducer<IBooksState, IBooksActions>
export default booksReducer
