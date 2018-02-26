import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import LoginContainer from '../../containers/LoginContainer'
import Login from '../../components/Login'

describe('LoginContaner', () => {
  const loginState = 'state'

  const state = {login: loginState}
  const store = state => configureMockStore([thunk])(state);

  const render = store => {
    return shallow(
      <LoginContainer store={store}/>
    );
  };

  it('passes props to Login component', () => {
    const container = render(store(state));
    let view = container.find(Login);

    expect(view.props().loginState).toEqual(loginState);
    expect(view.props().login).toBeDefined()
  });
});
