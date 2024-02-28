import React from "react";
import {  Route, Routes} from "react-router-dom";
import { Companies } from "./Companies";
import {CompanyDetails} from "./CompanyDetails"

import { Signup } from "./Signup";
import { Login } from "./Login";
import {Profile} from "./Profile"
import { NavBar } from "./NavBar";
import { Home } from "./Home";



export const RouteComponent = ({ register, login, logout }) => {
    return (
       <>
                <NavBar logout={logout}/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/companies" element={<Companies />} />
                    <Route exact path="/companies/:handle" element={<CompanyDetails />} />
                    <Route exact path="/jobs" element={<CompanyDetails />} />
                    <Route exact path="/login" element={<Login login={login} />} />
                    <Route exact path="/signup" element={<Signup register={register}/>} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
       </>
       
    )
}
