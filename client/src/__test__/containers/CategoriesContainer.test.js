import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import CategoriesContainer from '../../containers/CategoriesContainer'
import Categories from '../../components/Categories'

describe('CategoriesContaner', () => {
  const categoriesProps = [{id: 'id'}]
  const state = {categories: categoriesProps}
  const store = state => configureMockStore([thunk])(state);

  const render = store => {
    return shallow(
      <CategoriesContainer store={store}/>
    );
  };

  it('passes props to Categories component', () => {
    const container = render(store(state));
    let view = container.find(Categories);

    expect(view.props().categories).toEqual(categoriesProps);
    expect(view.props().fetchCategories()).toBeDefined;
    expect(view.props().fetchCategoryMovies()).toBeDefined;
  });
});
