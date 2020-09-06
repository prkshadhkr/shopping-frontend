import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import Login from '../user/Login';
import Profile from '../user/Profile';
import Home from '../screens/Home';
import Products from '../screens/Products';
import NewProduct from '../screens/NewProduct';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import Review from '../screens/Review';
import Shipping from '../screens/Shipping';
import Payment from '../screens/Payment';


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
     
        <AuthRoute exact path="/products/new">
          <NewProduct />
        </AuthRoute>

        <AuthRoute exact path="/products/:id">
          <ProductDetails />
        </AuthRoute>

       <AuthRoute exact path="/products/:id/reviews">
          <Review />
       </AuthRoute>
       
       <AuthRoute exact path="/orders">
         <Cart />
       </AuthRoute>

       <AuthRoute exact path="/orders/payment">
         <Payment />
       </AuthRoute>
       
       <AuthRoute exact path="/orders/shipping">
         <Shipping />
       </AuthRoute>
       
     </Switch>
    </div>
  )
}

export default Routes;