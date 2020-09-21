import React from  'react';
import UserContext from './user/UserContext';

/** following is for mock store */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {};
const makeMockStore = (state = {}) => {
  return mockStore ({
    ...initialState,
    ...state
  })
}

/** create a demouser */
const demoUser = {
  username: "testing",
  first_name: "testing",
  last_name: "testing",
  email: "testing@gmail.com",
  password: "testing",
  is_admin: false
};

/**
 * user is destructured from userContext in Profilejs as
 * const { user, setUser } = useContext(UserContext);
 */
const UserProvider = ({ children, user = demoUser }) => (
  <UserContext.Provider value={{user}}>
    {children}
  </UserContext.Provider>
)

export { mock, makeMockStore, UserProvider };