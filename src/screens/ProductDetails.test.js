import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mock, makeMockStore } from '../testUtils';
import { BASE_URL } from '../constants/generic';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

//has to be 'react-router-dom' not just any string:
jest.mock('react-router-dom', () => ({
  useParams: () => ({
    id: 0
  }),
  useHistory: () => ({
  })
}));

const { id }  = useParams();
mock.onGet(`${BASE_URL}/products/${id}`).reply(200, { 
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
});

const store = makeMockStore(
  {
    product: {},
    reviews: []   
  });

it ('render without crashing',  () => {
  render ( 
    <Provider store={store}>
      <ProductDetails />
    </Provider>
  );
});

