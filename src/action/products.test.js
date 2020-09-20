import { addItem, removeItem } from './products';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes';

let items = {};
beforeEach(() =>{
  Object.keys(items).forEach(k => delete items[k])
});

// let's add an item
describe ('addItem', () => {
  it('is a function', () => {
    expect(typeof addItem).toEqual('function')
  });

  it('should add an item', () => {
    items = {
      id : 11
    }
    let expectedAction = {
      type: ADD_TO_CART,
      id: 11
    }

    expect(addItem(items.id)).toEqual(expectedAction);
    expect(Object.keys(items).length).toEqual(1);
  });
});

//Let's remove the item we just added in previous test
describe('remove item', () => {
  it('is a function ', () => {
    expect(typeof removeItem).toEqual('function');
  });

  it('should remove an item', () => {
    let expectedAction = {
      type: REMOVE_FROM_CART,
      id: 11
    }
    expect( removeItem(items.id)).not.toEqual(expectedAction);
    expect(Object.keys(items).length).toEqual(0);
  })
})