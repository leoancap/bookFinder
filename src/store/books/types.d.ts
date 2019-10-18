import BooksActionTypes from './actionTypes'

import { IBook } from '#domainTypes'

interface IFetchBooksBegin {
  type: BooksActionTypes.FETCH_BOOKS_BEGIN
  payload: undefined
}
interface IFetchBooksSuccess {
  type: BooksActionTypes.FETCH_BOOKS_SUCCESS
  payload: IBook[]
}

interface IFetchBooksFailure {
  type: BooksActionTypes.FETCH_BOOKS_FAILURE
  payload: undefined
}

// Action Union for Book Actions
type IBooksActions = IFetchBooksBegin | IFetchBooksSuccess | IFetchBooksFailure

export default IBooksActions
