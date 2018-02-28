import {connect} from 'react-redux'
import Movies from '../components/Movies'
import {moviesRequested} from '../actions/MoviesActions'
import {movieDeleteRequested} from '../actions/MovieActions'
import {compose} from 'ramda'

const mapStateToProps = state => {
  return {movies: state.movies}
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: compose(dispatch, moviesRequested),
    deleteMovie: compose(dispatch, movieDeleteRequested)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
