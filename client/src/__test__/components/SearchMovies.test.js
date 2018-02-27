import React from 'react'
import Enzyme, { mount } from 'enzyme'
import SearchMovies from '../../components/SearchMovies'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

describe('SearchMovies', () => {
  test('triggers onSubmit with form data when search is clicked', () => {
    const props = {
      onSubmit: jest.fn()
    }
    const formData = {
      searchQuery: 'query'
    }
    const state = {
      form: {
        searchMovie: {
          values: formData
        }
      }
    }
    const store = configureMockStore([thunk])(state);
    const wrapper = mount(
      <Provider store={store}>
        <SearchMovies {...props} />
      </Provider>
    );

    wrapper.setState(formData);
    const submit = wrapper.find('.searchMoviesForm');
    submit.simulate('submit');

    expect(props.onSubmit.mock.calls.length).toBe(1);
    expect(props.onSubmit.mock.calls[0][0]).toBe(formData);
  });
})
