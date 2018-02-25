import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import MoviesContainer from '../../containers/MoviesContainer'
import Movies from '../../components/Movies'

describe('MoviesContaner', () => {
  const moviesProps = {
    loading: false,
    data: [{
      id: 'id'
    }]
  }
  const state = {movies: moviesProps}
  const store = state => configureMockStore([thunk])(state);

  const render = store => {
    return shallow(
      <MoviesContainer store={store}/>
    );
  };

  it('passes props to Movies component', () => {
    const container = render(store(state));
    let view = container.find(Movies);

    expect(view.props().movies).toEqual(moviesProps);
  });
});
