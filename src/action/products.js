import axios from 'axios';
import { TOKEN_IN_STORAGE } from '../App';
import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  FETCH_PRODUCTS, 
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
  ERROR
} from '../constants/actionTypes';
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
const addProductAPI = (
  name,
  image,
  brand,
  price,
  category,
  count_in_stock,
  description,
  ) => {

  const _token = localStorage[TOKEN_IN_STORAGE];
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/products/new`, {
          name,
          image,
          brand,
          price,
          category,
          count_in_stock,
          description,
          _token
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


/**Update a product */
const updateProductAPI = (
  id,
  name,
  image,
  brand,
  price,
  category,
  count_in_stock,
  description,
  ) => {

  const _token = localStorage[TOKEN_IN_STORAGE];
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(`${BASE_URL}/products/${id}`, {
          name,
          image,
          brand,
          price,
          category,
          count_in_stock,
          description,
          _token
        }
      );
      dispatch(updateProduct( data.product ));
    } catch (e) {
      dispatch(gotError());
    }
  }
}

const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

/**remove a product */
const removeProductAPI = (id) => {
  const _token = localStorage[TOKEN_IN_STORAGE];
  return async (dispatch) => {
    try {
      await axios.delete(`${BASE_URL}/products/${id}`, {
        headers: {  //_token has to be via headers else will be undefined
          _token
        }
      });
      return dispatch(removeProduct(id))
    } catch (e) {
      dispatch(gotError());
    }
  }
}

const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    id
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
  addProductAPI,
  updateProductAPI,
  removeProductAPI
}