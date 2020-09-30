import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mock, makeMockStore } from '../testUtils';
import { BASE_URL } from '../constants/generic';
import { useParams } from 'react-router-dom';
import ProductDisplay from './ProductDisplay';
import { UserProvider } from '../testUtils';

// has to be 'react-router-dom' not just any string:
jest.mock('react-router-dom', () => ({
  useParams: () => ({
    id: 0,
  }),
}));

// const historyMock = { push: jest.fn() };
// const { id }  = useParams();
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
        <ProductDisplay product={product} />
      </UserProvider>
    </Provider>
  );
});

