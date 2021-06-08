import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Activities from './pages/Activities'
import Book from './pages/Book'
import Confirmation from './pages/Confirmation'
import Error from './pages/Error'
import Home from './pages/Home'

import Navbar from './components/Navbar'

export const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/accomodation" component={Accomodation}/>
          <Route exact path="/book" component={Book} />
          <Route path="/confirmation" component={Confirmation} />
          <Route excat path="/activities" component={Activities} />
          <Route exact path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
  )
}


// Perhaps we need to move the Navbar for it to display below hero image?
