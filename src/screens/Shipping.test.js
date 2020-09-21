import React from 'react';
import { render } from '@testing-library/react';
import Shipping from './Shipping';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import orders from '../reducers/orders';

const store = createStore(orders);

it ('render without crashing',  () => {
  render ( 
    <Provider store={store}>
      <Shipping />
    </Provider>
  );
});
