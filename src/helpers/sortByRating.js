const sortByRating = ( products ) =>{
  return products.sort((a, b) => a.rating - b.rating);
}

export default sortByRating;