import {
  MOVIES_REQUESTED,
  moviesReceived,
  moviesRequestFailed
} from '../actions/MoviesActions';
import {compose} from 'ramda';

export default api => {
  return store => next => {
    const fetchMovies = () => {
      const onSuccess = compose(store.dispatch, moviesReceived);
      const onFailure = compose(store.dispatch, moviesRequestFailed);

      api.fetchMovies({onSuccess, onFailure});
    };

    return action => {
      const result = next(action);
      switch (action.type) {
        case MOVIES_REQUESTED: {
          fetchMovies();
          break;
        }
        default:
          break;
      }
      return result;
    };
  };
};
