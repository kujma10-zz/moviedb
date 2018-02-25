import React from 'react'
import { Route } from 'react-router-dom'
import Movies from './containers/MoviesContainer'

const App = () => (
  <div>
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a href="/" className="navbar-brand">MovieDB</a>
    </nav>

    <main>
      <Route exact path="/" component={Movies} />
    </main>
  </div>
)

export default App
