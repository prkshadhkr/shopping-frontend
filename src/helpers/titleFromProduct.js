const titleFromProduct = ({
  id, 
  name, 
  image, 
  brand,
  price,
  category,
  count_in_stock,
  description,
  rating,
  num_reviews, 
  reviews }) => {
  return {
    id, 
    name, 
    image, 
    brand,
    price,
    category,
    count_in_stock,
    description,
    rating,
    num_reviews,
    reviews
  }
}

export default titleFromProduct;