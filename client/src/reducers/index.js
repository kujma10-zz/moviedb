import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import moviesReducer from './MoviesReducer'
import loginReducer from './LoginReducer'
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  movies: moviesReducer,
  login: loginReducer,
  form: reduxFormReducer
})
