import { 
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
  ERROR,
  ADD_TO_CART, 
  REMOVE_FROM_CART
} from '../constants/actionTypes';
import { cartTotal } from '../helpers/cartTotal';
import productsByRating from '../helpers/productsByRating';
import makeProduct from '../helpers/makeProduct';

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
      return { ...state, products: productsByRating(action.products) };

    /** create a new product */
    case CREATE_PRODUCT:
      return { ...state, products: [ 
        ...state.products, makeProduct(action.product)]
      };

    /** update a product */
    case UPDATE_PRODUCT:
      return { ...state, 
        products: state.products.map(p => p.id === action.product.id ?
          makeProduct(action.product): p)
      }
    
    /** remove a product */
    case REMOVE_PRODUCT:
      return { ...state,
        products: state.products.filter(p => p.id !== action.product.id )
      }

    /** add items to the cart */
    case ADD_TO_CART: {
      const copyItems = { ...state.items };
      const copyProducts = [ ...state.products ];
      copyItems[action.id] = (copyItems[action.id] || 0) + 1;
      const currentProduct = copyProducts.filter(p => p.id === action.id);
      
      // block adding item that is not available in stock
      if(copyItems[action.id] <= currentProduct[0].count_in_stock ) {
        return {
          ...state,
          items: copyItems,
          cartValue: cartTotal(
          state.products,
          copyItems)
        }
      } else {  
        return { ...state }
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