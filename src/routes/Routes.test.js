import React from 'react';
import { render } from '@testing-library/react';
import Routes from './Routes';
import { MemoryRouter } from 'react-router';
import { UserProvider } from '../testUtils';

it ('renders without crashing', function() {
  render (
    <MemoryRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </MemoryRouter>
  )
});

it ('should match the snapshot', function() {
  const { asFragment } = render (
    <MemoryRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </MemoryRouter>
  )
  expect(asFragment()).toMatchSnapshot();
});

it ('should match the snapshot if user logged out', function() {
  const { asFragment } = render (
    <MemoryRouter>
      <UserProvider user={null}>
        <Routes />
      </UserProvider>
    </MemoryRouter>
  )
  expect(asFragment()).toMatchSnapshot();
});