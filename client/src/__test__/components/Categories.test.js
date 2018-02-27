import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Categories from '../../components/Categories'

describe('Categories', () => {
  const setup = (props) => {
    const enzymeWrapper = mount(<Categories {...props} />)
    return {
      props,
      enzymeWrapper
    }
  }
  const categories = [
    {
      id: 1,
      name: 'category'
    },
    {
      id: 2,
      name: 'category'
    }
  ];
  const props = {
    fetchCategories: jest.fn(),
    fetchCategoryMovies: jest.fn(),
    categories
  }

  it('renders categories', () => {
    const { enzymeWrapper } = setup(props)
    const categoriesList = enzymeWrapper.find('ul.list-group');
    expect(categoriesList.props().children).toHaveLength(props.categories.length);
  })

  it('triggers action to fetch category movies', () => {
    const { enzymeWrapper } = setup(props)
    const firstCategory = enzymeWrapper.find('a').first();
    firstCategory.simulate('click');
    expect(props.fetchCategoryMovies).toBeCalledWith({id: 1});
  })
})
