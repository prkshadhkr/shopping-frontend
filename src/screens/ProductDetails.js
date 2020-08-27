import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddRemoveIcons from './AddRemoveIcons';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector(st => 
    st.titles.products.find(el => el.id === +id)
  );
  return (
    <div className="row justify-content-center">
      <div className="ProductDetails col-md-4">
        <h5> { product["name"] } </h5>
        <img style={{width: "100%", height: "30vw", objectFit: "contain"}}
          className="productDetails-img card-img-top"
          src={product.image}
          alt={product.name}
        />
        <div>
          <h6>{ product.description }</h6>
          <p>Unit Price: ${ product.price }</p>
          < AddRemoveIcons id={id} />
        <div>
          <Link to="/products">
            <h6>Back</h6>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;