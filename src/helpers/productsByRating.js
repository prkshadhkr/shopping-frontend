const productsByRating = ( products ) =>{
  return products.sort((a, b) => b.rating - a.rating);
}

export default productsByRating;