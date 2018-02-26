import {connect} from 'react-redux'
import Login from '../components/Login'
import {loginRequested} from '../actions/LoginActions'
import {compose} from 'ramda'

const mapStateToProps = (state) => {
  return {
    loginState: state.login
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: compose(dispatch, loginRequested),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
