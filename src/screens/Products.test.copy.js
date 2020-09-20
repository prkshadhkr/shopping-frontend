// import React from 'react';
// import { render } from '@testing-library/react';
// import Products from '../screens/Products';
// import { createStore } from 'redux';
// import { MemoryRouter } from 'react-router-dom';
// import rootReducer from "../reducers/rootReducer";
// import { Provider } from 'react-redux';
// import { UserProvider } from '../testUtils';

// // import configureMockStore from 'redux-mock-store';
// // import thunk from 'redux-thunk';
// // const middlewares = [thunk];
// // const mockStore = configureMockStore(middlewares);

// const store = createStore(rootReducer);

// it ('renders and should display', function() {
//   const { getByText } = render(
//     <MemoryRouter>
//       <Provider store ={store}>
//         <UserProvider >
//           <Products />
//         </UserProvider>
//       </Provider>
//     </MemoryRouter>
//   );
//   const textInPage = getByText(/Check these out!/i);
//   expect(textInPage.toBe)
// });