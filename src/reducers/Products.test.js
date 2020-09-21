import products from './products';
import {
  FETCH_PRODUCTS,
} from '../constants/actionTypes';

const DEFAULT_STATE = {
  products: [],
  items : {},
  cartValue : 0.00,
  error: false
};

describe('products reducers ', () => {
  it('should return the initial state', () => {
    expect(products(undefined, {})).toEqual( DEFAULT_STATE );
  });

  it('should handle FETCH_PRODUCTS', () => {
    expect(
      products({}, {
        type: FETCH_PRODUCTS,
        products: ['a', 'b', 'c', 'd']
      })
    ).toEqual({ products :['a', 'b', 'c', 'd' ]  });
  });
});