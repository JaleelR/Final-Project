import React, { useState, useEffect } from "react";
import { JoblyApi } from "./Api";

export const SearchBar = ({lookUpTerm}) => { 
    const Blankterm = "";
    const [term, setTerm] = useState(Blankterm);
    
    const handleChange = (e) => {
        setTerm(e.target.value);  
    }

 async function handleSubmit (e) {
        e.preventDefault();
        console.log("being submitted", term)
     lookUpTerm(term);
     console.log("get:", term);
         setTerm(Blankterm);
     
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