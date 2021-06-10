import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import guestreservation from './reducers/reservation'

import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Activities from './pages/Activities'
import Book from './pages/Book'
import Confirmation from './pages/Confirmation'
import Error from './pages/Error'
import Home from './pages/Home'

import Navbar from './components/Navbar'

const reducer = combineReducers({
  guestreservation: guestreservation.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/accomodation" component={Accomodation}/>
          <Route exact path="/book" component={Book} />
          <Route exact path="/confirmation" component={Confirmation} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </Provider>
   
  )
}

// Put the provider store back on line 26 and 39
// Do we really need exact on all paths? Won´t work if we remove them, should we do something else then instead
// Perhaps we need to move the Navbar for it to display below hero image?
