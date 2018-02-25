import moviesMiddleware from '../../middlewares/MoviesMiddleware';
import {
  MOVIES_REQUESTED
} from '../../actions/MoviesActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('MoviesMiddleware', () => {
  it('fetches movies when requested', () => {
    const store = configureMockStore([thunk])({})
    const next = jest.fn();
    const action = {type: MOVIES_REQUESTED};
    const api = {
      fetchMovies: jest.fn()
    }
    const middleware = moviesMiddleware(api);
    middleware(store)(next)(action);

    expect(api.fetchMovies.mock.calls.length).toBe(1);
  });
});
