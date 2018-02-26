import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import CreateMovieFormContainer from '../../containers/CreateMovieFormContainer'
import CreateMovieForm from '../../components/CreateMovieForm'

describe('CreateMovieFormContaner', () => {
  const state = {}
  const store = state => configureMockStore([thunk])(state);

  const render = store => {
    return shallow(
      <CreateMovieFormContainer store={store}/>
    );
  };

  it('passes props to CreateMovieForm component', () => {
    const container = render(store(state));
    let view = container.find(CreateMovieForm);

    expect(view.props().onSubmit).toBeDefined()
  });
});
