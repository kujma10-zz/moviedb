import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Login from '../../components/Login'

describe('Login', () => {
  test('calls login request when submit is clicked', () => {
    const props = {
      login: jest.fn(),
      loginState: ''
    }
    const wrapper = mount(
      <Login {...props} />
    );
    const formData = {
      email: 'bar@email.com',
      password: '1234'
    }
    wrapper.setState(formData);
    const submit = wrapper.find('.form-signin');
    submit.simulate('submit');
    expect(props.login).toBeCalledWith(formData);
  });
})
