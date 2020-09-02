const makeProduct = ({
  name, 
  image, 
  brand, 
  price, 
  category, 
  couunt_in_stock, 
  description }) => {
    
  return { 
    name, 
    image, 
    brand, 
    price, 
    category, 
    couunt_in_stock, 
    description };
}

export default makeProduct;