import { combineReducers } from 'redux';
import products  from './products';
import reviews from './reviews';
import orders from './orders';

const rootReducer = combineReducers(
  { products, reviews, orders }
)

export default rootReducer;