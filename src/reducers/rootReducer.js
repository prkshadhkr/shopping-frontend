import { combineReducers } from 'redux';
import products  from './products';
import reviews from './reviews'

const rootReducer = combineReducers(
  { products, reviews  }
)

export default rootReducer;