import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductAPI } from '../action/products';
import ProductForm from './ProductForm';

const NewProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  /** add product and save to backend */
  const save = ({
    name,
    image, 
    brand,
    price,
    category,
    count_in_stock,
    description
  }) => {
    dispatch( addProductAPI(
      name,
      image,
      brand,
      +price,
      category,
      +count_in_stock,
      description
    ));
    
    history.push("/products")
  }

  /** cancel and redirect */
  const cancel = () => {
    history.push("/");
  }
  
  return (
    <main>
      <h5 style={{textAlign: "center"}}>New Product</h5>
      <ProductForm save={save} cancel={cancel} />
    </main>
  );
}

export default NewProduct;
