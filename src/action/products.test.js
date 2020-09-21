import { 
  fetchProducts,
  addProductAPI,
  updateProductAPI,
  removeProductAPI,
  addItem, 
  removeItem } from './products';
import { 
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART } from '../constants/actionTypes';
import { BASE_URL } from '../constants/generic';
import { mock, makeMockStore } from '../testUtils';

it('should fetch all products', async () => {
  const store = makeMockStore();
  const products = ['a', 'b', 'c'];
  const expectedActions = [{ products: ['a', 'b', 'c'], type: FETCH_PRODUCTS }];
  mock.onGet(`${BASE_URL}/products`).reply(201, {
      products 
    });
  
  await store.dispatch(fetchProducts());
  expect(store.getActions()).toEqual(expectedActions);
})


it('should create a product', async () => {
  const store = makeMockStore();
  const product = {
    name : 'n1',
    image: 'i1',
    brand: 'b1',
    price: 12.22,
    category: 'c1',
    count_in_stock: 3,
    description: 'd1'
  };
  const expectedActions = [{ 
    product: {
      name : 'n1',
      image: 'i1',
      brand: 'b1',
      price: 12.22,
      category: 'c1',
      count_in_stock: 3,
      description: 'd1'
    }, 
    type: CREATE_PRODUCT }];
  mock.onPost(`${BASE_URL}/products/new`).reply(201, { 
      product 
    });
  
  await store.dispatch(addProductAPI(product));
  expect(store.getActions()).toEqual(expectedActions);
})

it('should update a product', async () => {
  const store = makeMockStore();
  const id = 101;
  const product = {
    name : 'n101',
    image: 'i101',
    brand: 'b101',
    price: 12.22,
    category: 'c101',
    count_in_stock: 3,
    description: 'd101'
  };
  const expectedActions = [{ 
    product: {
      name : 'n101',
      image: 'i101',
      brand: 'b101',
      price: 12.22,
      category: 'c101',
      count_in_stock: 3,
      description: 'd101'
    }, 
    type: UPDATE_PRODUCT }];
  mock.onPatch(`${BASE_URL}/products/${id}`).reply(201, { 
      product
    });
  
  await store.dispatch(updateProductAPI(id));
  expect(store.getActions()).toEqual(expectedActions);
})

it('should remove the product', async () => {
  const store = makeMockStore();
  const id = 202;
  const expectedActions = [{
    type: REMOVE_PRODUCT,
    id
  }];
  mock.onDelete(`${BASE_URL}/products/${id}`).reply(201);
  await store.dispatch(removeProductAPI(id));
  expect(store.getActions()).toEqual(expectedActions);
})

let items = {};
beforeEach(() =>{
  Object.keys(items).forEach(k => delete items[k])
});

// const's add an item
describe ('addItem', () => {
  it('is a function', () => {
    expect(typeof addItem).toEqual('function')
  });

  it('should add an item', () => {
    items = {
      id : 11
    }
    const expectedAction = {
      type: ADD_TO_CART,
      id: 11
    }

    expect(addItem(items.id)).toEqual(expectedAction);
    expect(Object.keys(items).length).toEqual(1);
  });
});

//Const's remove the item we just added in previous test
describe('remove item', () => {
  it('is a function ', () => {
    expect(typeof removeItem).toEqual('function');
  });

  it('should remove an item', () => {
    const expectedAction = {
      type: REMOVE_FROM_CART,
      id: 11
    }
    expect( removeItem(items.id)).not.toEqual(expectedAction);
    expect(Object.keys(items).length).toEqual(0);
  })
});