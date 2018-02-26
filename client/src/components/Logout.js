import { Component } from 'react';
import { clearAuthToken } from '../helpers/Auth';

class Logout extends Component {
  componentDidMount() {
    clearAuthToken()
    this.props.history.push("/")
  }

  render() {
    return null;
  }
}

export default Logout;
