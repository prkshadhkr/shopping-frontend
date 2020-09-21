import React from 'react';
import { render } from '@testing-library/react';
import NewProduct from './NewProduct';
import { MemoryRouter } from 'react-router';
import { Provider } from "react-redux";
import { makeMockStore } from '../testUtils';

const store = makeMockStore();

it ('renders without crashing', function() {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <NewProduct />
      </Provider>
    </MemoryRouter>
  )
});

it ('matches snapshot', function() {
  const { asFragment } = render (
    <MemoryRouter>
      <Provider store={store}>
        <NewProduct />
      </Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
})