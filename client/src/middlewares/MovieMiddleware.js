import {
  MOVIE_CREATE_REQUESTED,
  MOVIE_EDIT_REQUESTED,
  MOVIE_DELETE_REQUESTED
} from '../actions/MovieActions';
import {moviesRequested} from '../actions/MoviesActions';
import {compose} from 'ramda';

export default api => {
  return store => next => {
    return action => {
      const result = next(action);

      const onSuccess = compose(store.dispatch, moviesRequested);
      const onFailure = () => {};

      switch (action.type) {
        case MOVIE_CREATE_REQUESTED: {
          api.createMovie(action.payload, {onSuccess, onFailure});
          break;
        }
        case MOVIE_EDIT_REQUESTED: {
          api.updateMovie(action.payload, {onSuccess, onFailure});
          break;
        }
        case MOVIE_DELETE_REQUESTED: {
          api.deleteMovie(action.payload, {onSuccess, onFailure});
          break;
        }
        default:
          break;
      }
      return result;
    };
  };
};
