import React, { useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from "./userContext";

export const NavBar = ({ logout }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
     
  const handleClick = (e) => {
    e.preventDefault();
    logout(); 
    navigate('/');
  }

  return ( 
      <div>
      {currentUser ? 
        <>
          {console.log("Logged In:", currentUser)}
        <NavLink to="/"> <h4>Jobly</h4></NavLink>
      <NavLink to="/companies"> companies</NavLink>
      <NavLink to="/jobs"> Jobs </NavLink>
      <NavLink to="/profile"> Profile </NavLink>
          <NavLink onClick={handleClick}> <h4>Logout { currentUser.user.username}</h4></NavLink>
        </>
        :
        <>
          {console.log("Logged out:", currentUser)}
        <NavLink to="/login"> Login </NavLink>
        <NavLink to="/signup"> Signup </NavLink>
        </>
    }
     </div>
    )
}