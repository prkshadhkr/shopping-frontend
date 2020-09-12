import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AddRemoveIcons from './AddRemoveIcons';
import { createOrderAPI } from '../action/orders';

const Cart = () => {
  const  { products, items } = useSelector(st => st.products);
  const dispatch = useDispatch();
  const history = useHistory();

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
      cartItems.push({'id': +key, 'qty': value});
    }
    await dispatch (createOrderAPI (cartItems));
    history.push(`/orders/shipping`)
  };
 
  const displayTable = () => {
    const rowSetup = Object.keys(items).map(id => (
      <tr key={id}>
        <td className="text-center align-middle">
          <Link to={`/products/${id}`}>
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
          <AddRemoveIcons id={id} />
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
        <button 
          onClick={createOrder}
          className="btn btn-outline-success float-right"
        >
          Proceed to checkout
        </button>
      </div>) : (
      <div style={{textAlign : "center"}}>
        <h5>Item/s not added yet!</h5>
      </div>
    );
}

export default Cart;