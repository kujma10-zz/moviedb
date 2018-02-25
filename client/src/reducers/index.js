import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import moviesReducer from './MoviesReducer'

export default combineReducers({
  routing: routerReducer,
  movies: moviesReducer
})
