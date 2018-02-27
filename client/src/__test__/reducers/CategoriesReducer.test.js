import reducer from '../../reducers/CategoriesReducer'
import {
  CATEGORIES_RECEIVED
} from '../../actions/CategoriesActions'

describe('Categories Reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('sets categories data when CATEGORIES_RECEIVED', () => {
    const categories = [{id: '1'}];
    expect(
      reducer([], {type: CATEGORIES_RECEIVED, payload: categories})
    ).toEqual(categories);
  })
})
