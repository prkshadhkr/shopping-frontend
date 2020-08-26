const { FETCH_PRODUCTS, ERROR } = require("../constants/actionTypes")

const INITIAL_STATE = {
  test: [],
  error: false
}

const rootReducer = ( state = INITIAL_STATE, action ) => {
  // switch (action.type) {
  //   case FETCH_PRODUCTS:
  //     return { ...state, products: action.products }
  //   case ERROR:
  //     return { ...state, error: true };
  //   default:
  //     return state;
  // }
  return 1;
}

export default rootReducer;