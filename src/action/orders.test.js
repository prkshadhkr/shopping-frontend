import { 
  createOrderAPI,
  fetchOrdersAPI,
  addShippingAPI } from './orders';
import { 
  CREATE_ORDER,
  FETCH_ORDERS,
  ADD_SHIPPING } from '../constants/actionTypes';
import { BASE_URL } from '../constants/generic';
import { mock, makeMockStore } from '../testUtils';


it('should create an order', async () => {
  const store = makeMockStore();
  let order =  [
      {"id": 1, "qty": 2},
      {"id": 2, "qty": 4}
    ];
  let expectedActions = [{ order: [      
    {"id": 1, "qty": 2},
    {"id": 2, "qty": 4}], type: CREATE_ORDER }];

  mock.onPost(`${BASE_URL}/orders`).reply(201, {
    order: order
  })

  await store.dispatch(createOrderAPI(order));
  expect(store.getActions()).toEqual(expectedActions);  
});

it('should get all orders', async () => {
  const store = makeMockStore();
  let username = 'testing';
  let orders = [2, 3, 50]
  let expectedActions = [{ orders: [2, 3, 50], type: FETCH_ORDERS }];

  mock.onGet(`${BASE_URL}/orders/${username}`).reply(201, {
    orders
  });
  
  await store.dispatch(fetchOrdersAPI(username));
  expect(store.getActions()).toEqual(expectedActions);
});

it ('should add shipping address', async () => {
  const store = makeMockStore();
  let shipping = {
    order_id : 1,
    address : "123 Man street",
    city : "Best City",
    zip_code : "12345",
  };
  let expectedActions = [{ shipping : {
    order_id : 1,
    address : "123 Man street",
    city : "Best City",
    zip_code : "12345",
  }, type : ADD_SHIPPING }];

  mock.onPost(`${BASE_URL}/orders/shipping`).reply(201, {
    shipping
  });
  
  await store.dispatch(addShippingAPI(shipping));
  expect(store.getActions()).toEqual(expectedActions);
});



