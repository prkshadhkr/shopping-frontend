import React, { useContext } from 'react';
import { Link, NavLink }  from 'react-router-dom';
import UserContext from '../user/UserContext';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { quantityTotal } from '../helpers/cartTotal';

const Navbar = ({ handleLogout }) => {
  const { user } = useContext(UserContext);
  const qty = useSelector(state => quantityTotal(state.products.items));
  const val = useSelector(state => state.products.cartValue);
  const unit = qty > 1 ? "items" : "item";
  
  const navbarLoddedIn = () => {
    return (
      <>
        <ul className="navbar-nav ml-auto">
          { 
            user.is_admin ?
            <li className="nav-item mr-4">
              <NavLink to="/products/new" className="nav-link">
                Add a Product
              </NavLink>
            </li>: ""
           }

          <li className="nav-item mr-4">
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink to="/cart" className="nav-link">
              Cart
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <h6 className="navbar-text text-info">
              { qty } {unit}, Total: $ {val}
            </h6>
          </li>
          <li className="nav-item mr-4">
            <NavLink to="/Profile" className="nav-link">
              { user.username }
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink to="/" onClick={handleLogout} className="nav-link">
              Logout
            </NavLink>
          </li>
        </ul>
      </>
    )
  }

  const navbarLoggedOut = () => {
    return (
      <>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>
      </>
    )
  }
  return (
    <nav className="Navbar navbar navbar-expand-md">
      <Link to="/" className="navbar-brand">
        Shopping
      </Link>
      { user? navbarLoddedIn() : navbarLoggedOut() }
    </nav>
  )
}

export default Navbar;