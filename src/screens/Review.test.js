import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reviews from '../reducers/reviews';

const store = createStore(reviews);

it ('render without crashing',  () => {
  render ( 
    <Provider store={store}>
      <Review />
    </Provider>
  );
});

