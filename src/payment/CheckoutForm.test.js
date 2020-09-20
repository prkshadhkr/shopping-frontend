import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { UserProvider } from '../testUtils';
import CheckoutForm from './CheckoutForm';
import rootReducer from '../reducers/rootReducer';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { STRIPE_SECRET_KEY } from '../secret';

const promise = loadStripe(STRIPE_SECRET_KEY);
const store = createStore(rootReducer);


it ('should render without crashing', function() {
  render (
    <MemoryRouter>
      <Provider store={store}>
      <UserProvider>
        <Elements stripe={promise}>
        <CheckoutForm />
        </Elements>
      </UserProvider>
      </Provider>
    </MemoryRouter>
  )
});

it ('should match snapshot', function () {
  const {asFragment} = render (
    <MemoryRouter>
      <Provider store={store}>
        <UserProvider>
          <Elements stripe={promise}>
            <CheckoutForm />
          </Elements>
        </UserProvider>
      </Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
})

it ('should match snapshot if user logged out', function () {
  const {asFragment} = render (
    <MemoryRouter>
      <Provider store={store}>
        <UserProvider user={null}>
          <Elements stripe={null}>
            <CheckoutForm />
          </Elements>
        </UserProvider>
      </Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
})