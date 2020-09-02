import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromAPI }from '../action/reviews';

import ProductDisplay  from './ProductDisplay';
import ProductForm from './ProductForm';
import { updateProductAPI, removeProductAPI } from '../action/products';

const ProductDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const pId = Number(id);
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

  /**Toggle editing ON/OFF */
  const toggleEdit = () => {
    setIsEditing(editing => !editing);
  }

  /** update product and save to backend */
  const save = ({
    name,
    image, 
    brand,
    price,
    category,
    count_in_stock,
    description
  }) => {
    dispatch( updateProductAPI(
      +id,
      name,
      image,
      brand,
      +price,
      category,
      +count_in_stock,
      description
    ));

    toggleEdit();
  }

  /** handle delete product */
  const deleteProduct = () => {
    dispatch (removeProductAPI(id));
    history.push("/products");
  }

  if(!product) return <p>Loading...</p>;

  return (
    <div className="Product">
      {
      isEditing ?
        <ProductForm 
          product={Object(product)}
          save={save}
          cancel={toggleEdit}
          />
        :
        <ProductDisplay 
          product={Object(product)}
          toggleEdit={toggleEdit} 
          deleteProduct={deleteProduct}/>
      }
    </div>
  )
}

export default ProductDetails;
