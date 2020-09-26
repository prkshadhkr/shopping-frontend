import React from 'react';
import { render } from '@testing-library/react';
import Products from './Products';
import { Provider } from 'react-redux';
import { makeMockStore } from '../testUtils';

// import { fetchProducts } from '../action/products'
const store = makeMockStore({
  products: [],
  items : {},
  cartValue : 0.00,
  error: false
});

it ('render without crashing',  () => {
  render ( 
    <Provider store={store}>
        <Products />
    </Provider>
  );
});