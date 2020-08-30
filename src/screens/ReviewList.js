import React from 'react';
import ReviewInfo from './ReviewInfo'

const ReviewList = ({ reviews = [], deleteReview }) => {
  if(reviews.length < 1) {
    return (
    <h6 style={{textAlign:"center"}}>
      No review exists yet!
    </h6>)
  }
  
  return (
    reviews.map(r => (
      <ReviewInfo 
        key={r.id}
        id={r.id}
        title={r.title}
        rating={r.rating}
        comment={r.comment}
        deleteReview={deleteReview}
      />
    ))
  );
}

export default ReviewList;