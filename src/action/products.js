import axios from 'axios';
import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  FETCH_PRODUCTS, 
  CREATE_PRODUCT,
  ERROR } from '../constants/actionTypes';
import  { BASE_URL } from '../constants/generic';

/** get products from server */
const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`);
      dispatch(gotProducts(data.products));
    } catch (e) {
      dispatch(gotError())
    }
  }
}

const gotProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    products
  }
}

const gotError = () => {
  return {
    type: ERROR
  }
}

/**post a product */
const addProductToAPI = (
  name,
  brand,
  image,
  price,
  category,
  count_in_stock,
  description,
  ) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/products`, {
          name,
          brand,
          image,
          price,
          category,
          count_in_stock,
          description
        }
      );
      dispatch(createProduct( data.product ));
    } catch (e) {
      dispatch(gotError());
    }
  }
}

const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product
  }
}

/** add item to the cart */
const addItem = (id) => {
  return { type: ADD_TO_CART, id };
}

/** remove item from the cart */
const removeItem = (id) => {
  return { type: REMOVE_FROM_CART, id };
}


export { 
  addItem, 
  removeItem, 
  fetchProducts,
  addProductToAPI
}