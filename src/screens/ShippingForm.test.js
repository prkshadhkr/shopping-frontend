import React from 'react';
import { render } from '@testing-library/react';
import ShippingForm from './ShippingForm';
import { MemoryRouter } from 'react-router';

it ('renders without crashing', function() {
  render(
    <MemoryRouter>
      <ShippingForm />
    </MemoryRouter>
  )
});

it ('matches snapshot', function() {
  const { asFragment } = render (
    <MemoryRouter>
      <ShippingForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
})