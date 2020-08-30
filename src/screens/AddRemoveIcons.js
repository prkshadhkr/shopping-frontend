import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../action/products';

const AddRemoveIcons = ({ id }) =>{
  const dispatch = useDispatch();
  const add = () => dispatch(addItem(id));
  const remove = () => dispatch(removeItem(id));

  return (
    <div>
      <div>
        <i className="fas fa-plus-square fa-1x text-success" onClick={add} />
        <i className="fas fa-minus-square fa-1x text-danger" onClick={remove} />    
      </div>
    </div>
  )

}
export default AddRemoveIcons;