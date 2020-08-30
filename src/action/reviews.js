import axios from 'axios';
import {
  FETCH_PRODUCT,
  ADD_REVIEW,
  REMOVE_REVIEW
} from '../constants/actionTypes';
import { BASE_URL } from '../constants/generic';

/**get a  product by product id */
const getProductFromAPI = (pId) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${BASE_URL}/products/${pId}`);
    return dispatch(getReviews( data.product ));
  };
}

const getReviews = ( product ) => {
  return {
    type: FETCH_PRODUCT,
    product
  };
}

/** post a review to API */
const addReviewToAPI = (pId, title, rating, comment) => { 
  return async (dispatch) => {
    const { data } = await axios.post(`${BASE_URL}/products/${pId}/reviews`, {
      title,
      rating,
      comment
    });

    return dispatch(addReview(
      pId, 
      data.review.title, 
      data.review.rating,
      data.review.comment ));
  };
}

const addReview = (pId, title, rating, comment) => {
  return  {
    type: ADD_REVIEW,
    pId,
    title,
    rating,
    comment
  }
} 

/**delete request to API */
const removeReviewFromAPI = (pId, rId) => {
  return async (dispatch) => {
    await axios.delete(`${BASE_URL}/products/${pId}/reviews/${rId}`);
    return dispatch(removeReview(pId, rId))
  }

}

const removeReview = (pId, rId) => {
  return {
    type: REMOVE_REVIEW,
    pId,
    rId,
  }
}

export {
  getProductFromAPI,
  addReviewToAPI,
  removeReviewFromAPI
}