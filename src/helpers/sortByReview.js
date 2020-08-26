const sortByReview = ({ products }) =>{
  return products.sort((a, b) => a.num_reviews - b.num_reviews);
}

export default sortByReview;
