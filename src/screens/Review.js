import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { 
  getProductFromAPI,
  addReviewToAPI, 
  removeReviewFromAPI } from '../action/reviews';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const Review = () => {
  const pId = Number(useParams().id);
  const product = useSelector(st => st.reviews[pId]);
  const dispatch = useDispatch();

  useEffect (() => {
    const  getProduct =  () => {
      dispatch(getProductFromAPI(pId));
    } 
    if (!product) {
      getProduct();
    }
  }, [ dispatch, pId, product]);

  function submitReview( title, rating, comment ){
    dispatch(addReviewToAPI( pId, title, rating, comment ));
  }

  function deleteReview( rId ) {
    dispatch(removeReviewFromAPI(pId, rId))
  }

  if(!product) return <p>Loading...</p>;
  return (
    <div className="Review">
      <h5 style={{textAlign: "center"}}> Reviews </h5>
      <div >
        <ReviewList
          reviews={Object(product).reviews}
          deleteReview={deleteReview}
        /> 
      </div>
      <div style={{textAlign : "center"}}>
        <h6>Add Review</h6>
        <ReviewForm submitReview={submitReview} />
        <Link to={`/products/${pId}`} > Back </Link>
      </div>
    </div>
  )
}

export default Review;