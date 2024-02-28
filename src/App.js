import React, {  useState, useEffect, useContext } from 'react';
import { useNavigate, BrowserRouter } from "react-router-dom"
import './App.css';
import { JoblyApi } from './Api';
import { NavBar } from './NavBar';
import { RouteComponent as Routes } from './RouteComponent';
import { UserContext } from './userContext';
import { jwtDecode } from "jwt-decode";


function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    async function getUser() {
      if (token) {
        try {
          let { username } = jwtDecode(token);
                 console.log("!!!!!!!", username);
          JoblyApi.apiToken = token;
          console.log("jobly.api Token:", JoblyApi.token )
          let user = await JoblyApi.getUserInfo(username);
          setCurrentUser(user);
        } catch (e) {
          console.log("Error:", e)
        }
      } 
    } 
    getUser();
  }, [token] )




  async function register(username, password, firstName, lastName, email) {
    try {
      const gotToken = await JoblyApi.signup(username, password, firstName, lastName, email);
      setToken(gotToken.token);
      console.log(gotToken.token);
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
      setToken(getToken.token); // Log new token
    }
  catch (e) {
    console.log("Error:", e)
  }
  };
  

  
  function logout() { 
    setToken("");
    setCurrentUser(null);
    console.log(token);
    console.log("clicked");
  }




  return (
    <BrowserRouter>
      <UserContext.Provider 
      value={{currentUser, setCurrentUser}}>

     
    <div className="App">
      <header className="App-header"> 
          <Routes register={register} login={login} logout={ logout} />
        
      
        
        
      </header>
      </div >
       </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
