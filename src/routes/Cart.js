import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddRemoveIcons from '../products/AddRemoveIcons';

const Cart = () => {
  const  { products, items } = useSelector(st => st.titles);

  const displayTable = () => {
    const rowSetup = Object.keys(items).map(id => (
      <tr key={id}>
        <td className="text-center align-middle">
          <Link to={`/products/${id}`}>
            { products.find(el => el.id === +id).name }
          </Link>
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
        <h5>Item details</h5>
        <table className="table table-border table-striped">

          <thead>
            <tr>
              <th>Name</th>
              <th>Pice</th>
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
    (<div> { displayTable() } </div>) : (
      <div>
        <h6>Items not added yet</h6>
      </div>
    );
}

export default Cart;