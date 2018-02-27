import {
  CATEGORIES_REQUESTED,
  CATEGORY_MOVIES_REQUESTED,
  categoriesReceived
} from '../actions/CategoriesActions';
import {
  moviesReceived,
  moviesRequestFailed
} from '../actions/MoviesActions';
import {compose} from 'ramda';

export default api => {
  return store => next => {
    const fetchCategories = () => {
      const onSuccess = compose(store.dispatch, categoriesReceived);
      const onFailure = compose(store.dispatch, () => {});

      api.fetchCategories({onSuccess, onFailure});
    };

    const fetchCategoryMovies = (params) => {
      const onSuccess = compose(store.dispatch, moviesReceived);
      const onFailure = compose(store.dispatch, moviesRequestFailed);

      api.fetchCategoryMovies(params, {onSuccess, onFailure});
    };

    return action => {
      const result = next(action);
      switch (action.type) {
        case CATEGORIES_REQUESTED: {
          fetchCategories();
          break;
        }
        case CATEGORY_MOVIES_REQUESTED: {
          fetchCategoryMovies(action.payload);
          break;
        }
        default:
          break;
      }
      return result;
    };
  };
};
