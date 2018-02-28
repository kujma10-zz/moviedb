import {connect} from 'react-redux'
import MovieForm from '../components/MovieForm'
import {movieEditRequested} from '../actions/MovieActions'

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    initialValues: {
      title: ownProps.movie.title,
      description: ownProps.movie.description,
      category_id: ownProps.movie.category.id
    }
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    onSubmit: (values) => {
      dispatch(movieEditRequested({id: ownProps.movie.id, values}));
      ownProps.closeModal();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm)
