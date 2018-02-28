import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import EditMovieFormContainer from '../../containers/EditMovieFormContainer'
import MovieForm from '../../components/MovieForm'

describe('EditMovieFormContainer', () => {
  const categories = ['1']
  const selectedMovie = {
    title: 'title',
    description: 'descr',
    category: {
      id: 1
    }
  }
  const state = {categories}
  const store = state => configureMockStore([thunk])(state);

  const render = store => {
    return shallow(
      <EditMovieFormContainer store={store} movie={selectedMovie} />
    );
  };

  it('passes categories to MovieForm component', () => {
    const container = render(store(state));
    let view = container.find(MovieForm);

    expect(view.props().categories).toEqual(categories);
    expect(view.props().initialValues.title).toEqual('title');
    expect(view.props().initialValues.description).toEqual('descr');
    expect(view.props().initialValues.category_id).toEqual(1);
  });

  it('passes initial values to MovieForm component', () => {
    const container = render(store(state));
    let view = container.find(MovieForm);

    expect(view.props().initialValues.title).toEqual('title');
    expect(view.props().initialValues.description).toEqual('descr');
    expect(view.props().initialValues.category_id).toEqual(1);
  });
});
