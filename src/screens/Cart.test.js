import React from 'react';
import { render } from '@testing-library/react';
import Cart from './Cart';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import products from '../reducers/products';

const store = createStore(products);

it ('render without crashing',  () => {
  render ( 
    <Provider store={store}>
      <Cart />
    </Provider>
  );
});

