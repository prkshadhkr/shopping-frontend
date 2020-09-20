import { 
  createOrderAPI,
  fetchOrdersAPI } from './orders';
import { 
  CREATE_ORDER,
  FETCH_ORDERS } from '../constants/actionTypes';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {};
const makeMockStore = (state = {}) => {
  return mockStore ({
    ...initialState,
    ...state
  })
}

describe('fetchPosts', () => {
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())
});

it('should create an order', async () => {

  const store = makeMockStore()

  let order =  [
      {"id": 1, "qty": 2},
      {"id": 2, "qty": 4}
    ];
//     // _token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vy"+
//     //         "bmFtZSI6InRlc3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsIml"+
//     //         "hdCI6MTYwMDU1Nzg5N30.5CLViPHqzo9BkYYGP3IuhYIbIr"+
//     //         "Pw0rjVKFY1CRhhhIk"

  let expectedActions = {type: CREATE_ORDER };
  const res = await store.dispatch(createOrderAPI(order));
  expect(store.getActions()).toEqual(expectedActions);  
});

// it('should fetch order', async () => {
//   const store = makeMockStore();
//   const username = 'testing';
//   let expectedActions = { type: FETCH_ORDERS };
//   await store.dispatch(fetchOrdersAPI(username));

//   expect(store.getActions()).toEqual(expectedActions);

// })




