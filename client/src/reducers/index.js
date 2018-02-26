import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import moviesReducer from './MoviesReducer'
import loginReducer from './LoginReducer'

export default combineReducers({
  routing: routerReducer,
  movies: moviesReducer,
  login: loginReducer
})
