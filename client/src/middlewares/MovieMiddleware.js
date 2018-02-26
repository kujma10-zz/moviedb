import {MOVIE_CREATE_REQUESTED} from '../actions/MovieActions';
import {moviesRequested} from '../actions/MoviesActions';
import {compose} from 'ramda';

export default api => {
  return store => next => {
    const createMovie = (params) => {
      const onSuccess = compose(store.dispatch, moviesRequested);
      const onFailure = () => {};

      api.createMovie(params, {onSuccess, onFailure});
    };

    return action => {
      const result = next(action);
      switch (action.type) {
        case MOVIE_CREATE_REQUESTED: {
          createMovie(action.payload);
          break;
        }
        default:
          break;
      }
      return result;
    };
  };
};
