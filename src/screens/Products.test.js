import React from 'react';
import { render } from '@testing-library/react';
import Products from './Products';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import products from '../reducers/products';
// import { fetchProducts } from '../action/products'

const store = createStore(products);


// it('dispatches products', async () => {
//   const dispatch = jest.fn();
//   await fetchProducts()(dispatch);
//   console.log('**********', getState);
//   expect(dispatch).toBe(dispatch);
// });

it ('render without crashing',  () => {
  render ( 
    <Provider store={store}>
        <Products />
    </Provider>
  );
});