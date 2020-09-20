import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../testUtils';

it ('renders without crashing', function() {
  render(
  <MemoryRouter >
    <UserProvider>
      <Home />
    </UserProvider>
  </MemoryRouter>);
});

it ('matches snapshot', function() {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider>
        <Home />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
})

it('should match snapshot if user logout', function() {
  const { asFragment } = render(
    <MemoryRouter>
      <UserProvider user={null}>
        <Home />
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
})