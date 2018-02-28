import React from 'react'
import Enzyme, { mount } from 'enzyme'
import MovieForm from '../../components/MovieForm'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

describe('MovieForm', () => {
  test('triggers onSubmit with form data when form is submitted', () => {
    const props = {
      onSubmit: jest.fn(),
      categories: [
        {
          id: '1',
          name: 'name'
        },
        {
          id: '2',
          name: 'name 2'
        }
      ]
    }
    const formData = {
      title: 'movie-title',
      category_id: '2',
      description: 'description'
    }
    const state = {
      form: {
        movieForm: {
          values: formData
        }
      }
    }
    const store = configureMockStore([thunk])(state);
    const wrapper = mount(
      <Provider store={store}>
        <MovieForm {...props} />
      </Provider>
    );

    const submit = wrapper.find('.movieForm');
    submit.simulate('submit');

    expect(props.onSubmit.mock.calls.length).toBe(1);
    expect(props.onSubmit.mock.calls[0][0]).toBe(formData);
  });
})
