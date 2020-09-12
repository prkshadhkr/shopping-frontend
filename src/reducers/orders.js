import {
  CREATE_ORDER,
  ERROR,
  ADD_SHIPPING,
  FETCH_ORDERS,
} from '../constants/actionTypes';

const DEFAULT_STATE = {
  orders: [],
  order : {},
  shipping : {},
  payment : {},
  error: false,
}

const rootReducer = (state = DEFAULT_STATE, action ) => {
  switch (action.type) {
    case CREATE_ORDER: 
      return { ...state, order: {...action.order}
      }
    
    case FETCH_ORDERS:
      return { ...state, orders: [ ...action.orders ]}

    case ADD_SHIPPING:
      return { ...state, shipping:
      { ...state.shipping, ...action.shipping}}

    case ERROR:
      return { ...state, error: true }

    default: 
      return state;
  }
}

export default rootReducer;
