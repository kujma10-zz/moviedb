import categoriesMiddleware from '../../middlewares/CategoriesMiddleware';
import {
  CATEGORIES_REQUESTED
} from '../../actions/CategoriesActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('CategoriesMiddleware', () => {
  it('fetches categories when requested', () => {
    const store = configureMockStore([thunk])({})
    const next = jest.fn();
    const action = {type: CATEGORIES_REQUESTED};
    const api = {
      fetchCategories: jest.fn()
    }
    const middleware = categoriesMiddleware(api);
    middleware(store)(next)(action);

    expect(api.fetchCategories.mock.calls.length).toBe(1);
  });
});
