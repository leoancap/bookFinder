import BooksActionTypes from '../../store/books/actionTypes'

import { fetchBooks } from '#actions'

import { IBook } from '#domainTypes'

it('makes sure the dispatch function is called', async () => {
  const dispatch = jest.fn()
  await fetchBooks()(dispatch)
  expect(dispatch).toBeCalledWith({
    type: BooksActionTypes.FETCH_BOOKS_BEGIN,
  })
})
