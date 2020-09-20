import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { MemoryRouter } from 'react-router-dom';

const store = createStore(rootReducer);

test('renders and should display the first page', () => {
  const { getByText } = render(
    <MemoryRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  const textInPage = getByText(/Onestop shop: Checkout our great products!/i);
  expect(textInPage).toBeInTheDocument();
});