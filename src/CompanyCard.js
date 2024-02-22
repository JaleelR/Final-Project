import React from "react";
import { NavLink } from "react-router-dom";


export const CompanyCard = ({  handle, description }) => {

    return (
        <div> 
            <NavLink to={`/companies/${handle}`} >
            <h5 > {handle}</h5>
                <p> {description} </p>
                </NavLink>
    </div>
)
}