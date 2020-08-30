import { 
  FETCH_PRODUCTS,
  ERROR,
  ADD_TO_CART, 
  REMOVE_FROM_CART } from '../constants/actionTypes';
import { cartTotal } from '../helpers/cartTotal';
import productsByRating from '../helpers/productsByRating';

const DEFAULT_STATE = {
  products: [],
  items : {},
  cartValue : 0.00,
  error: false
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {

    /** lets getch a product order by ratings: */
    case FETCH_PRODUCTS:
      // return { ...state, products: [ ...productsByRating(action.products)] };
      return { ...state, products: productsByRating(action.products) };

    /**lets add a item to a cart */
    case ADD_TO_CART: {
      const copyItems = { ...state.items };
      copyItems[action.id] = (copyItems[action.id] || 0) + 1;
      
      return {
        ...state,
        items: copyItems,
        cartValue: cartTotal(
          state.products,
          copyItems
        )
      }
    }

    /**lets remove item from cart */
    case REMOVE_FROM_CART: {
      const copyItems = { ...state.items };
      if(!copyItems[action.id]){
        return state;
      }
      copyItems[action.id]--;
      if(copyItems[action.id] === 0){
        delete copyItems[action.id];
      }
      return {
        ...state,
        items: copyItems,
        cartValue: cartTotal(
          state.products,
          copyItems
        )
      }
    }

    case ERROR:
        return { ...state, error: true };
    default:
      return state;
  }
}

export default rootReducer;