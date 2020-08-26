import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import Login from '../user/Login';
import Profile from '../user/Profile';
import Home from '../home/Home';
import Products from '../products/Products';
import ProductDetails from '../products/ProductDetails';
import Cart from './Cart';
import AuthRoutes from './AuthRoute';

import '../home/Home.css';

const Routes = ({ setToken }) => {
  return (
    <div>
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route exact path="/login">
         <Login setToken={setToken} />
       </Route>
       <AuthRoute exact path="/profile">
         <Profile />
       </AuthRoute>
       <AuthRoute exact path="/products">
         <Products />
       </AuthRoute>
       <AuthRoute exact path="/products/:id">
         <ProductDetails />
       </AuthRoute>
       <AuthRoutes exact path="/cart">
         <Cart />
       </AuthRoutes>
     </Switch>
    </div>
  )
}

export default Routes;