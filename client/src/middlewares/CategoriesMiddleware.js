import {
  CATEGORIES_REQUESTED,
  categoriesReceived
} from '../actions/CategoriesActions';
import {compose} from 'ramda';

export default api => {
  return store => next => {
    const fetchCategories = () => {
      const onSuccess = compose(store.dispatch, categoriesReceived);
      const onFailure = compose(store.dispatch, () => {});

      api.fetchCategories({onSuccess, onFailure});
    };

    return action => {
      const result = next(action);
      switch (action.type) {
        case CATEGORIES_REQUESTED: {
          fetchCategories();
          break;
        }
        default:
          break;
      }
      return result;
    };
  };
};
