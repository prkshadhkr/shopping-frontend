import React, { useContext }from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../user/UserContext';

const AdminRoutes = ({ exact, path, children }) => {
  const { user } = useContext(UserContext);

  if(user && user.is_admin) {
    return (
      <Route exact={exact} path={path}>
        { children }
      </Route>
    )
  }
  return <Redirect to="/" /> 
}

export { 
  AdminRoutes,
};



