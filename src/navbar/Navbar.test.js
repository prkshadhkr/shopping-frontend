import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from './Navbar';
import { UserProvider } from '../testUtils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);

it ('render without crashing', function() {
  render (
    <MemoryRouter>
      <Provider store={store}>
        <UserProvider>
          <Navbar />
        </UserProvider>
      </Provider>
    </MemoryRouter>
  )
});

it('mathces the snapshot', function() {
  const { asFragment } = render (
    <MemoryRouter>
      <Provider store={store}>
        <UserProvider>
          <Navbar />
        </UserProvider>
      </Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it ('matches the snapshot when logged out', function() {
  const { asFragment } = render (
    <MemoryRouter>
      <Provider store={store}>
        <UserProvider user={null}>
          <Navbar />
        </UserProvider>
      </Provider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
})