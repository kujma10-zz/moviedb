import { Component } from 'react';
import { clearAuthToken, clearUserId } from '../helpers/Auth';

class Logout extends Component {
  componentDidMount() {
    clearAuthToken()
    clearUserId()
    this.props.history.push("/")
  }

  render() {
    return null;
  }
}

export default Logout;
