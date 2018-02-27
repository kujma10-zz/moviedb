import React from 'react'
import '../signin.css'
import {isLoggedIn} from '../helpers/Auth'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (isLoggedIn()) {
      this.props.history.push("/")
    }
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value, password: this.state.password});
  }

  handlePasswordChange(event) {
    this.setState({email: this.state.email, password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login({email: this.state.email, password: this.state.password});
  }

  render () {
    if (this.props.loginState === 'SUCCEDED') {
      this.props.history.push("/")
    }

    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input
            value={this.state.email}
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            onChange={this.handleEmailChange}
            required autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
            value={this.state.password}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            required
          />
          <button className="btn btn-lg btn-primary btn-block">Sign in</button>
        </form>
      </div>
    )
  }
}


export default Login
