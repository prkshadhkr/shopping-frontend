import React from 'react';
import { render } from '@testing-library/react';
import ReviewInfo from './ReviewInfo';
import { MemoryRouter } from 'react-router';
import { Provider } from "react-redux";
import { makeMockStore, UserProvider } from '../testUtils';

const store = makeMockStore();

it ('renders without crashing', function() {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <UserProvider>
          <ReviewInfo />
        </UserProvider>
      </Provider>
    </MemoryRouter>
  )
});

it ('matches snapshot', function() {
  const { asFragment } = render (
    <MemoryRouter>
      <Provider store={store}>
        <UserProvider>
          <ReviewInfo />
        </UserProvider>
      </Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
})