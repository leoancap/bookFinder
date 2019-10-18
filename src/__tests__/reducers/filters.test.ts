import filtersReducer from '../../store/filters/reducer'

import { setTextSearch } from '#actions'

it('should set textSearch filter', () => {
  const payload = 'ergonomic'
  const state = filtersReducer(undefined, setTextSearch(payload))
  expect(state.textSearch).toBe(payload)
})
