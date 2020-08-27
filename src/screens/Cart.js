import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddRemoveIcons from './AddRemoveIcons';

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
        <h5 style={{"text-align":"center"}}>Item details</h5>
        <table className="table table-border table-striped">

          <thead style={{"text-align":"center"}}>
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
    (<div> { displayTable() } </div>) : (
      <div>
        <h5 style={{"text-align":"center"}} >Items not added yet!</h5>
      </div>
    );
}

export default Cart;