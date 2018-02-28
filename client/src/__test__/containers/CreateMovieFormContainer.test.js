import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import CreateMovieFormContainer from '../../containers/CreateMovieFormContainer'
import MovieForm from '../../components/MovieForm'

describe('CreateMovieFormContaner', () => {
  const categories = ['1']
  const state = {categories}
  const store = state => configureMockStore([thunk])(state);

  const render = store => {
    return shallow(
      <CreateMovieFormContainer store={store}/>
    );
  };

  it('passes props to MovieForm component', () => {
    const container = render(store(state));
    let view = container.find(MovieForm);

    expect(view.props().categories).toEqual(categories)
    expect(view.props().onSubmit).toBeDefined()
  });
});
