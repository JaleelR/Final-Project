import React, { useState, useEffect } from "react";
import { JoblyApi } from "./Api";

export const SearchBar = () => { 
    const Blankterm = "";
    const [term, setTerm] = useState(Blankterm);
    
    const handleChange = (e) => {
        setTerm(e.target.value);  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
            {
   
            }
            <input
                type="text"
                placeholder="Enter Search Term"
                onChange={handleChange}
                value={term}
                /> 
            <button> Submit </button>
        </form>
    )
    
}