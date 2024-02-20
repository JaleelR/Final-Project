import React from "react";


export const CompanyCard = ({ handle, description}) => {
    return ( 
        <div> 
            
            <h5> {handle}</h5>
            <p> {description} </p>
    </div>
)
}