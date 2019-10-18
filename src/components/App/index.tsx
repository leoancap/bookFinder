import React from 'react'
import { Provider } from 'react-redux'

import { AppRouter } from '#router'
import { store } from '#store'
import { GlobalStyles } from '#styled'

export const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyles />
    <AppRouter />
  </Provider>
)

export default App
