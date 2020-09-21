import orders from './orders';
import {
  CREATE_ORDER,
  FETCH_ORDERS,
  ADD_SHIPPING,
} from '../constants/actionTypes';

const DEFAULT_STATE = {
  orders: [],
  order: {},
  shipping: {},
  payment: {},
  error: false,
}

describe('orders reducers ', () => {
  it('should return the initial state', () => {
    expect(orders(undefined, {})).toEqual( DEFAULT_STATE );
  });

  it('should handle CREATE_ORDER', () => {
    expect(
      orders({}, {
        type: CREATE_ORDER,
        products: []
      })
    ).toEqual({ order : {} });
  });

  it('should handle FETCH_ORDERS', () => {
    expect(
      orders({}, {
        type: FETCH_ORDERS,
        orders: [1, 3, 5]
      })
    ).toEqual({ orders : [1, 3, 5] });
  });

  it('should handle shipping', () => {
    expect(
      orders({}, {
        type: ADD_SHIPPING,
        shipping: {
          order_id: 1,
          address: "123 Man street",
          city: "Best City",
          zip_code: "12345"
        }
      })
    ).toEqual({
      shipping: {
        order_id: 1,
        address: "123 Man street",
        city: "Best City",
        zip_code: "12345"
      }
    });
  });
});