import React from "react";
import {Switch, BrowserRouter, Route, Routes} from "react-router-dom";
import { Companies } from "./Companies";
import {CompanyDetails} from "./CompanyDetails"
import { Jobs } from "./Jobs";
import { Signup } from "./Signup";
import { Login } from "./Login";
import {Profile} from "./Profile"
import { NavBar } from "./NavBar";
import { Home } from "./Home";





export const RouteComponent = () => {
    return (
        <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/companies" element={<Companies />} />
                    <Route exact path="/companies/:handle" element={<CompanyDetails />} />
                    <Route exact path="/jobs" element={<Jobs />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
       
        </BrowserRouter>
    )
}
