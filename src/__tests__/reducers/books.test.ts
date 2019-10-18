import booksReducer from '../../store/books/reducer'

import { LoadingStatus } from '#constants'

it('returns initial state if no action passed to it', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore pass no action so that it returns initial state
  expect(booksReducer(undefined, {})).toEqual({
    books: [],
    loadingStatus: LoadingStatus.DONE,
  })
})
