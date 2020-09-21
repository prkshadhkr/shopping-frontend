import { 
  getProductFromAPI,
  addReviewToAPI,
  removeReviewFromAPI} from './reviews';
import { 
  FETCH_PRODUCT,
  ADD_REVIEW,
  REMOVE_REVIEW } from '../constants/actionTypes';
import { BASE_URL } from '../constants/generic';
import { mock, makeMockStore } from '../testUtils';

it('should get a preoduct', async () => {
  const store = makeMockStore();
  const product = {};
  const pId = 11;
  const expectedActions = [{ product: {}, type: FETCH_PRODUCT }];
  mock.onGet(`${BASE_URL}/products/${pId}`).reply(201, { product });
  
  await store.dispatch(getProductFromAPI(pId));
  expect(store.getActions()).toEqual(expectedActions);
});

it('should add review to a product', async () => {
  const store = makeMockStore();
  const pId = 123;
  const title = 'good product';
  const rating = 4;
  const comment = 'Absolutely great product';
  const expectedActions = [{
    type: ADD_REVIEW,
    pId,
    title,
    rating,
    comment
  }]
  mock.onPost(`${BASE_URL}/products/${pId}/reviews`).reply(201, { 
    review: { title, rating, comment }});
  
  await store.dispatch(addReviewToAPI(pId, title, rating, comment));
  expect(store.getActions()).toEqual(expectedActions);
})

it('should remove a review of product', async () => {
  const store = makeMockStore();
  const pId = 123;
  const rId = 2;
  const expectedActions = [{
    type: REMOVE_REVIEW,
    pId,
    rId,
  }];
  mock.onDelete(`${BASE_URL}/products/${pId}/reviews/${rId}`).reply(201);
  
  await store.dispatch(removeReviewFromAPI(pId, rId));
  expect(store.getActions()).toEqual(expectedActions);
});