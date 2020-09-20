import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { UserProvider } from '../testUtils';
import AuthRoute from './AuthRoute';

it ('renders without crashing', function() {
  render (
    <MemoryRouter>
      <UserProvider>
        <AuthRoute />
      </UserProvider>
    </MemoryRouter>
  )
});

it ('should match  the snapshot', function() {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <AuthRoute />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it ('should match whenever user logged out', function() {
  const { asFragment } = render (
    <MemoryRouter>
      <UserProvider user={null}>
        <AuthRoute />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
})