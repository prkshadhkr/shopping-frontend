import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import Login from '../user/Login';
import Profile from '../user/Profile';
import Home from '../screens/Home';
import Products from '../screens/Products';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import Review from '../screens/Review';
import Admin from '../screens/Admin';
import AuthRoutes from './AuthRoute';
import { AdminRoutes } from './AdminRoute'
import ProductForm from '../screens/ProductForm';

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
       <AuthRoutes exact path="/products/:id/reviews">
          <Review />
       </AuthRoutes>
       <AdminRoutes exact path="/admin">
         <Admin />
       </AdminRoutes>
       <AdminRoutes exact path="/admin/products">
         <ProductForm />
       </AdminRoutes>
     </Switch>
    </div>
  )
}

export default Routes;