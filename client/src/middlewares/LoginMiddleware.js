import {
  LOGIN_REQUESTED,
  loginRequestFailed,
  loginSucceded
} from '../actions/LoginActions';
import { setAuthToken, setUserId } from '../helpers/Auth'

export default api => {
  return store => next => {
    const login = (params) => {
      const onSuccess = (response) => {
        setAuthToken(response.auth_token);
        setUserId(response.user_id);
        store.dispatch(loginSucceded());
      };

      const onFailure = () => {
        store.dispatch(loginRequestFailed());
      };

      api.authenticate(params, {onSuccess, onFailure});
    };

    return action => {
      const result = next(action);
      switch (action.type) {
        case LOGIN_REQUESTED: {
          login(action.payload);
          break;
        }
        default:
          break;
      }
      return result;
    };
  };
};
