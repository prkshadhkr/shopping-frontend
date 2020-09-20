import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AddRemoveIcons from './AddRemoveIcons';
import { createOrderAPI } from '../action/orders';
import { getProductFromAPI } from '../action/reviews';

const Cart = () => {
  const [cartError, setCartError] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const  { products, items } = useSelector(st => st.products);
  const dispatch = useDispatch();

  if(!products || !items) {
    return (
      <div style={{textAlign : "center"}}>
        <h5>Item/s not added yet!</h5>
      </div>
    )
  }

  /** lets craate a function to initiate an order */
  const createOrder = async () => {
    let cartItems = [];
    for(let [key, value] of Object.entries(items)){
      const { product } = await dispatch( getProductFromAPI(key));
      if(product.count_in_stock < value) {
        setCartError(err => ([ 
          ...err,
          `* ${product.count_in_stock} '${product.name}' available in stock`]));
      } else {
        cartItems.push({'id': +key, 'qty': value});
      }
      setIsConfirmed(true);
    }
    await dispatch (createOrderAPI (cartItems));
  };

  const displayTable = () => {
    const rowSetup = Object.keys(items).map(id => (
      <tr key={id}>
        <td className="text-center align-middle">
          <Link to={`/products/${+id}`}>
            { products.find(el => el.id === +id).name }
          </Link>
        </td>

        <td className="text-center align-middle">
          { products.find(el => el.id === +id).price}
        </td>

        <td className="text-center align-middle">
          { items[id] }
        </td>
        
        <td className="text-center align-middle">
          <AddRemoveIcons id={+id} />
        </td>

      </tr>
    ));

    return (
      <div>
        <h5 style={{textAlign : "center"}}>Item details</h5>
        <table className="table table-border table-striped">

          <thead style={{textAlign : "center"}}>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Add / Remove</th>
            </tr>
          </thead>
          <tbody>
            { rowSetup }
          </tbody>
        </table>
      </div>
    );
  }
  
  return Object.keys(items).length !== 0 ?
    ( 
      <div> 
        { displayTable() } 
      <div>
          <Link to="/orders/shipping" >
            <button 
              disabled={!isConfirmed || (cartError.length > 0)}
              className="btn btn-outline-primary float-right"
            >
              Proceeed to checkout
            </button>
          </Link>
          <div>
          <Link to="/orders" >
            <button 
              onClick={createOrder}
              disabled={isConfirmed }
              className="btn btn-outline-info float-right mr-2"
            >
             Confirm
            </button>
          </Link>
          </div>
        </div>
        { cartError.map( (val, idx) => <h6 key={idx} style={{color:"red"}}>{val}</h6>) }
        { cartError.length > 0 ? (
          <p>
            Sorry for the inconvenience, please fix the card item/s and <b>REFRESH</b> the page !
          </p>) : ""
        }
        </div>) : (
      <div style={{textAlign : "center"}}>
        <h5>Item/s not added yet!</h5>
      </div>
    );
}

export default Cart;