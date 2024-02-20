import React from "react";
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return ( 
      <div>
        <NavLink to="/"> <h4>Jobly</h4></NavLink>
      <NavLink to="/companies"> companies</NavLink>
      <NavLink to="/jobs"> Jobs </NavLink>
      <NavLink to="/login"> Login </NavLink>
      <NavLink to="/signup"> Signup </NavLink>
      <NavLink to="/profile"> Profile </NavLink>   
        </div>
    
    )
}