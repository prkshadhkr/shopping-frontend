import axios from 'axios';
import { TOKEN_IN_STORAGE } from '../App';
import {
  CREATE_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
  ADD_SHIPPING,
  ADD_PAYMENT,
  ERROR,
} from '../constants/actionTypes';
import  { BASE_URL } from '../constants/generic';

/** Create a order from product in a cart */
const createOrderAPI = ( products ) => {
  const _token = localStorage[TOKEN_IN_STORAGE];
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/orders`, {
        products,
        _token
      });
      dispatch (createOrder(data.order));
    } catch (e) {
      dispatch(gotError());
    }
  }
}

const createOrder = (order) => {
  return {
    type: CREATE_ORDER,
    order
  }
}

/** add shipping address to api for specific order */
const addShippingAPI = (order_id, address, city, zip_code ) => {
  const _token = localStorage[TOKEN_IN_STORAGE];
  return async (dispatch) => {

    try {
      const { data } = await axios.post(`${BASE_URL}/orders/shipping`, {
        order_id, 
        address,
        city, 
        zip_code,
        _token
      });
      dispatch( addShipping(data.shipping));
    } catch (e) {
      dispatch(gotError());
    }
  }
}

const addShipping = (shipping) => {
  return {
    type: ADD_SHIPPING,
    shipping
  }
}

const gotError = () => {
  return {
    type : ERROR
  }
}

export {
  createOrderAPI,
  addShippingAPI
}