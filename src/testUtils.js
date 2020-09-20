import React from  'react';
import UserContext from './user/UserContext';

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

export { UserProvider };