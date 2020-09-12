import axios from 'axios';
import { TOKEN_IN_STORAGE } from '../App';
import {
  CREATE_ORDER,
  FETCH_ORDERS,
  ADD_SHIPPING,
  ERROR
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
      // dispatch (handleError(e.response.data));
    }
  }
}

const createOrder = (order) => {
  return {
    type: CREATE_ORDER,
    order
  }
}

/** Get all orders by user */
const fetchOrdersAPI = (username) => {
  const _token = localStorage[TOKEN_IN_STORAGE];
  return async (dispatch) => { 
    try {
      const { data } = await axios.get(`${BASE_URL}/orders/${username}`, {
        headers: {
          _token
        }
      });
      dispatch (getOrders(data.orders));
    } catch (e) {
      dispatch(gotError());
    }
  }
}

const getOrders = (orders) => {
  return {
    type: FETCH_ORDERS,
    orders
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
  fetchOrdersAPI,
  addShippingAPI
}