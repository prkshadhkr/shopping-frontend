import React from 'react';
import { useSelector } from 'react-redux';

const Orders = () => {
  const orders = useSelector(state => state.orders.orders);

  if(!orders) {  //(orders.length < 1)
    return (
      <div style={{textAlign : "center"}}>
        <h5>Order/s not available yet!</h5>
      </div>
    )
  }

  const displayTable = () => {
    const rowSetup = orders.map(o => (
      <tr key={o.id}>
        <td className="text-center algin-middle">
          {o.id}
        </td>
        <td className="text-center algin-middle">
          $ { o.price}
        </td>
        <td className="text-center algin-middle">
          $ {o.tax_price}
        </td>
        <td className="text-center algin-middle">
          $ {o.shipping_price}
        </td>
        <td className="text-center algin-middle">
          $ {o.total_price}
        </td>
        <td className="text-center algin-middle">
          {o.address}
        </td>
        <td className="text-center algin-middle">
          {o.city}
        </td>
        <td className="text-center algin-middle">
          {o.is_paid? 'True': 'False'}
        </td>
        <td className="text-center algin-middle">
          {o.is_delivered? 'True': 'False'}
        </td>
      </tr>
    ));

    return (
      <div>
        <h5 style={{textAlign : "center"}}>Order details</h5>
        <table className="table table-border table-striped">

          <thead style={{textAlign : "center"}}>
            <tr>
              <th>Id</th>
              <th>Price</th>
              <th>Tax</th>
              <th>Shipping</th>
              <th>Total</th>
              <th>Address</th>
              <th>City</th>
              <th>Pay</th>
              <th>Delivery</th>
            </tr>
          </thead>
          <tbody>
            { rowSetup }
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <>
      { displayTable() }
    </>
  )
}

export default Orders;