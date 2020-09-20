import React, { useState, useEffect } from 'react';
import ShoppingApi from './Api';
import { decode } from 'jsonwebtoken';
import UserContext from './user/UserContext';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './navbar/Navbar';
import Routes from './routes/Routes';
import './App.css';

//for localStorage-simple
import { clear } from 'redux-localstorage-simple';

// stripe 
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { STRIPE_SECRET_KEY } from './secret';

//get your key from stripe and replace SRTIPE_SECRET_KEY
const promise = loadStripe(STRIPE_SECRET_KEY);


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
  }, [ token ]);

  const handleLogOut = () =>{
    setUser(null);
    setToken(null);
    clear(); //remove products from redux-localStorage-simple
    window.location.reload(false);
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
        <Elements stripe={promise}>
          <Routes setToken={setToken}/>
        </Elements>
      </UserContext.Provider>
    </div>
  );
}

export default App;
