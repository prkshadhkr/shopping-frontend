// import axios from 'axios';
// import { 
//   ADD_TO_CART, 
//   REMOVE_FROM_CART, 
//   FETCH_PRODUCTS, 
//   ERROR } from '../constants/actionTypes';
// import  { BASE_URL } from '../constants/generic';


// /** get products from server */
// const fetchProducts = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`${BASE_URL}/products`);
//       dispatch(gotProducts(data.products));
//     } catch (e) {
//       dispatch(gotError())
//     }
//   }
// }

// const gotProducts = (products) => {
//   return {
//     type: FETCH_PRODUCTS,
//     products
//   }
// }

// const gotError = () => {
//   return {
//     type: ERROR
//   }
// }


// const addItem = (id) => {
//   return { type: ADD_TO_CART, id };
// }

// const removeItem = (id) => {
//   return { type: REMOVE_FROM_CART, id };
// }


// export { 
//   addItem, 
//   removeItem, 
//   fetchProducts
// }