import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Movies from '../../components/Movies'

describe('Movies', () => {
  const setup = (props) => {
    const enzymeWrapper = mount(<Movies {...props} />)
    return {
      props,
      enzymeWrapper
    }
  }

  describe('Loading', () => {
    const props = {
      fetchMovies: jest.fn(),
      movies: {
        loading: true,
        data: null
      }
    }

    it('renders loading span', () => {
      const { enzymeWrapper } = setup(props)
      const loadingSpan = enzymeWrapper.find('span');
      expect(loadingSpan.props().children).toEqual('Loading ...');
    })
  })

  describe('No data', () => {
    const props = {
      fetchMovies: jest.fn(),
      movies: {
        loading: false,
        data: null
      }
    }

    it('renders no data span', () => {
      const { enzymeWrapper } = setup(props)
      const noDataSpan = enzymeWrapper.find('span');
      expect(noDataSpan.props().children).toEqual('No data');
    })
  })

  describe('Movies fetched', () => {
    const movies = [
      {
        id: 1,
        title: 'movie',
        description: 'movie description',
        category: 'category'
      },
      {
        id: 2,
        title: 'movie',
        description: 'movie description',
        category: 'category'
      }
    ]

    const props = {
      fetchMovies: jest.fn(),
      movies: {
        loading: false,
        data: movies
      }
    }

    it('renders movies', () => {
      const { enzymeWrapper } = setup(props)
      const moviesList = enzymeWrapper.find('div.list-group');
      expect(moviesList.props().children).toHaveLength(movies.length);
    })
  })

})
