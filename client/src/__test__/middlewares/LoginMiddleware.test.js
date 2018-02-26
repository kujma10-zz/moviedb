import loginMiddleware from '../../middlewares/LoginMiddleware';
import {
  LOGIN_REQUESTED
} from '../../actions/LoginActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('LoginMiddleware', () => {
  it('authenticates when requested', () => {
    const store = configureMockStore([thunk])({})
    const next = jest.fn();
    const action = {type: LOGIN_REQUESTED};
    const api = {
      authenticate: jest.fn()
    }
    const middleware = loginMiddleware(api);
    middleware(store)(next)(action);

    expect(api.authenticate.mock.calls.length).toBe(1);
  });
});
