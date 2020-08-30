import React, { useState, useEffect } from 'react';
import ShoppingApi from './Api';
import { decode } from 'jsonwebtoken';
import UserContext from './user/UserContext';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './navbar/Navbar';
import Routes from './routes/Routes';
import './App.css';


export const TOKEN_IN_STORAGE = "shopping-token-secret";

function App() {
  const [ loaded, setLoaded ] = useState(false);
  const [ user, setUser ] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_IN_STORAGE);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        let { username } = decode(token);
        let resUser = await ShoppingApi.getCurrentUser(username);
        setUser(resUser);
      } catch (e) {
        setUser(null);
      }
      setLoaded(true);
    }
    setLoaded(false);
    getCurrentUser();
  }, [token]);

  const handleLogOut = () =>{
    setUser(null);
    setToken(null);
  }

  if(!loaded) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
      <Navbar handleLogout={handleLogOut}/>
      <Routes setToken={setToken}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
