import {CATEGORIES_RECEIVED} from '../actions/CategoriesActions'

const initialState = [];

export default function categories(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_RECEIVED:
      return action.payload;
    default:
      return state;
  }
}
