import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShippingForm from './ShippingForm';
import { useHistory } from 'react-router-dom';
import { addShippingAPI } from '../action/orders';

const Shipping = () => {
  const order = useSelector(st => st.orders.order);
  const history = useHistory();
  const dispatch = useDispatch();
  console.log('<<<<< order_id >>>>>', Object(order).id);

  const save = ({
    order_id,
    address,
    city,
    zip_code
  }) => {
    dispatch( addShippingAPI(
      order_id,
      address,
      city,
      zip_code
    ));
    history.push(`/orders/payment`);
  };

  return (
    <div>
      <h5 style={{textAlign: "center"}}> shipping info </h5>
      <ShippingForm order_id={Object(order).id} save={save} />
    </div>
  )
}

export default Shipping;