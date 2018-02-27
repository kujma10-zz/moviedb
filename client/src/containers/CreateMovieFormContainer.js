import {connect} from 'react-redux'
import CreateMovieForm from '../components/CreateMovieForm'
import {movieCreateRequested} from '../actions/MovieActions'

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (values) => {
      dispatch(movieCreateRequested(values));
      ownProps.closeModal();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMovieForm)
