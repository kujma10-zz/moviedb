import {connect} from 'react-redux'
import Movies from '../components/Movies'
import {moviesRequested} from '../actions/MoviesActions'
import {compose} from 'ramda'

const mapStateToProps = state => {
  return {movies: state.movies}
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: compose(dispatch, moviesRequested)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
