import { combineReducers } from 'redux';
import  titles  from './titles';
import prods  from './products';

const rootReducer = combineReducers(
  { titles, prods }
)

export default rootReducer;