import React from 'react'
import { Route } from 'react-router-dom'
import Movies from './containers/MoviesContainer'
import Login from './containers/LoginContainer'
import Logout from './components/Logout'
import { Link } from 'react-router-dom'
import { isLoggedIn } from './helpers/Auth'
import Modal from 'react-responsive-modal'
import CreateMovieForm from './containers/CreateMovieFormContainer'

class App extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a href="/" className="navbar-brand">MovieDB</a>
            {isLoggedIn() ? <button onClick={this.onOpenModal}>Add Movie</button>:null}
            <Modal open={this.state.open} onClose={this.onCloseModal} little>
              <CreateMovieForm closeModal={this.onCloseModal}/>
            </Modal>
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
  }
}

export default App
