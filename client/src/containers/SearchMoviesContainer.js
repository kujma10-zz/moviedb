import {connect} from 'react-redux'
import SearchMovies from '../components/SearchMovies'
import {moviesSearchRequested} from '../actions/MoviesActions'
import {compose} from 'ramda'

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: compose(dispatch, moviesSearchRequested)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies)
