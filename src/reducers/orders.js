import {
  CREATE_ORDER,
  UPDATE_ORDER,
  ERROR,
  ADD_SHIPPING,
  ADD_PAYMENT,
} from '../constants/actionTypes';

const DEFAULT_STATE = {
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

    case ADD_SHIPPING:
      return { ...state, shipping:
      { ...state.shipping, ...action.shipping}}

    case ADD_PAYMENT:
      return { ...state, payment:
      { ...state.payment, ...action.payment}}

    case ERROR:
      return { ...state, error: true }

    default: 
      return state;
  }
}

export default rootReducer;
