import Confirmation from 'pages/Confirmation'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import About from './pages/About'
import Activities from './pages/Activities'
import Book from './pages/Book'
// import Confirmation from './pages/Confirmation'
import Error from './pages/Error'
import Home from './pages/Home'

import Navbar from './components/Navbar'

export const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/book" component={Book} />
          <Route path="/book/:slug" component={Confirmation} />
          <Route path="/activities" component={Activities} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
  )
}

// Should we add exact to all Routes?
// Perhaps we need to move the Navbar for it to display below hero image?
