import { 
  createOrderAPI,
  fetchOrdersAPI } from './orders';
import { 
  CREATE_ORDER,
  FETCH_ORDERS } from '../constants/actionTypes';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {};
const makeMockStore = (state = {}) => {
  return mockStore ({
    ...initialState,
    ...state
  })
}

it('should create an order', async () => {

  const store = makeMockStore()

  let order =  [
      {"id": 1, "qty": 2},
      {"id": 2, "qty": 4}
    ];

  let expectedActions = [{ order: {}, type: CREATE_ORDER }];

  mock.onPost('http://localhost:3001/orders').reply(201, {
    order: {}
  })

  await store.dispatch(createOrderAPI(order));
  expect(store.getActions()).toEqual(expectedActions);  
});





