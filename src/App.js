import React, {  useState, useEffect, useContext } from 'react';
import { useNavigate, BrowserRouter } from "react-router-dom"
import './App.css';
import { JoblyApi } from './Api';
import { NavBar } from './NavBar';
import { RouteComponent as Routes } from './RouteComponent';
import { UserContext } from './userContext';
import { jwtDecode } from "jwt-decode";
import { useLocalStorage } from './useLocalStorage';
export const TOKEN_STORAGE_ID = "jobly-token"

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function getUser() {
      if (token) {
        console.log("useEffecttoken", token)
        try {
          let { username } = jwtDecode(token);
          JoblyApi.token = token;
          //found error!
console.log("userrrrnammmmeeee", username);
          let user = await JoblyApi.getUserInfo(username);
        
          
          console.log("userrrrrrrrrr", user);
          setCurrentUser(user);
          setLoading(false); // Set loading to false after user info is fetched
        } catch (e) {
          console.log("Error:", e);
          setLoading(false); // Set loading to false in case of error
        }
      } else {
        setCurrentUser(null);
        setLoading(false); // Set loading to false if token is not found
      }
    }
    getUser();
  }, [token]);



  async function register(username, password, firstName, lastName, email) {
    try {
      const gotToken = await JoblyApi.signup(username, password, firstName, lastName, email);
      setToken(gotToken);
      console.log(gotToken);
      console.log("Success!")
    } catch (e) {
      console.log("Error:", e)
    }
  };

//   try {
//   console.log("success!")
// }
//   catch (e) {
//     console.log("Error:", e)
//   }

  async function login(username, password) {
    try {
      const getToken = await JoblyApi.login(username, password);
     console.log("tokeeeen:", getToken)
     setToken(getToken); 
    }
  catch (e) {
    console.log("Error:", e)
  }
  };
  

  
  function logout() { 
    setToken("");
    setCurrentUser(null);
    console.log(token);
  }




  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <header className="App-header">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Routes register={register} login={login} logout={logout} />
            )}
          </header>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
