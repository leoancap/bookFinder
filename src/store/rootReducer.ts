import { combineReducers } from 'redux'

import filtersReducer from './filters/reducer'
import booksReducer from './books/reducer'

const rootReducer = combineReducers({
  booksReducer,
  filtersReducer,
})

export default rootReducer
