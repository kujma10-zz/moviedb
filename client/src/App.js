import React from 'react'
import { Route } from 'react-router-dom'
import Movies from './containers/MoviesContainer'
import Login from './containers/LoginContainer'
import Logout from './components/Logout'
import { Link } from 'react-router-dom'
import { isLoggedIn } from './helpers/Auth'

const App = () => (
  <div>
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a href="/" className="navbar-brand">MovieDB</a>

        <ul className="nav navbar-nav navbar-right">
          <li>
            {isLoggedIn() ? (<Link to='/logout'>Log Out</Link>):(<Link to='/login'>Log In</Link>)}
          </li>
        </ul>
    </nav>

    <main>
      <Route exact path="/" component={Movies} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </main>
  </div>
)

export default App
