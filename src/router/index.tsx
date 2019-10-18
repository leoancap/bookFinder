import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Layout, NavBar, SubHeader } from '#components'

import { Home, Book } from '#pages'

export const AppRouter = () => (
  <BrowserRouter>
    <NavBar />
    <SubHeader />
    <Layout>
      <Switch>
        <Route
          path='/'
          exact
          render={props => <Home {...props} key={Math.random()} />}
        />
        <Route path='/book/:bookID' component={Book} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
