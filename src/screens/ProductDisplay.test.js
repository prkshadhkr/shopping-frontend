import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeMockStore } from '../testUtils';
import { MemoryRouter } from 'react-router-dom';
import ProductDisplay from './ProductDisplay';
import { UserProvider } from '../testUtils';

// has to be 'react-router-dom' not just any string:
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return { ...originalModule }
});

const product = {
  id : 0,
  name: 'test Product', 
  image: 'test', 
  brand: 'test',
  price: 10, 
  category: 'test', 
  count_in_stock: 5, 
  description: 'test',
  rating: 5,
  num_reviews: 5
};

const store = makeMockStore({
  products: [],
  items : {},
  cartValue : 0.00,
  error: false,
  reviews: []
});

it ('render without crashing',  () => {
  render ( 
    <Provider store={store}>
      <UserProvider >
        <MemoryRouter>
          <ProductDisplay product={product} />
        </MemoryRouter>
      </UserProvider>
    </Provider>
  );
});
