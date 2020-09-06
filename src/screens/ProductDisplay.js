import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AddRemoveIcons from './AddRemoveIcons';
import UserContext from '../user/UserContext';

const ProductDisplay = ({ product, toggleEdit, deleteProduct }) => {
  const { user } = useContext(UserContext);
  const {
    id, 
    name, 
    image, 
    price,
    description, 
    rating,
    num_reviews } = product;

  return (
    <div className="row justify-content-center">
      <div className="ProductDetails col-md-4">
        <h5> { name } </h5>
        <img style={{width: "100%", height: "30vw", objectFit: "contain"}}
          className="productDetails-img card-img-top"
          src={image}
          alt={name}
        />
        <div>
          <h6>{ description }</h6>
          <p>Unit Price: ${ price }</p>
          <div className="ProductDetails-icons row">
            <div className="col">
              < AddRemoveIcons id={id} />
            </div>
            { user.is_admin ?
              <div className="ProductDisplay-edit-area" style={{marginRight: "20px"}}>
                <i className="fas fa-edit text-primary"
                  style={{marginRight: "5px"}}
                  onClick={toggleEdit} />
                <i className="fas fa-times text-danger"
                  onClick={deleteProduct} />
              </div> : ""
            }
          </div>
          <div>
            <p> Rating: { rating } reviews: { num_reviews }</p>
          </div>
          <Link to="/products">
            <h6>Back</h6>
          </Link>
          <div>
            <Link to={`/products/${id}/reviews`}> 
              Comments / Reviews 
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay;