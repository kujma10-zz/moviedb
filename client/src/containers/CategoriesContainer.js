import {connect} from 'react-redux'
import Categories from '../components/Categories'
import {
  categoriesRequested,
  categoryMoviesRequested
} from '../actions/CategoriesActions'
import {compose} from 'ramda'

const mapStateToProps = state => {
  return {categories: state.categories}
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: compose(dispatch, categoriesRequested),
    fetchCategoryMovies: compose(dispatch, categoryMoviesRequested)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
