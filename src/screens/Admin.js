import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <div style={{textAlign: "center"}}>
        <Link to="/admin/products" >
          Add a product
        </Link>
      </div>
      <div style={{textAlign: "center"}}>
        <Link to="/admin/products/:id" >
          Edit a product
        </Link>
      </div>
    </div>
  )
}

export default Admin;