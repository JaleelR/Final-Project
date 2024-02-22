import React, { useState, useEffect, useRef } from "react";
import { CompanyCard } from "./CompanyCard";
import { JoblyApi } from "./Api";
import { CompanyDetails } from "./CompanyDetails";
import { NavLink } from "react-router-dom";
import { RouteComponent } from "./RouteComponent";
import { SearchBar } from "./SearchBar";



export const Companies = () => {
    const getElement  = useRef(null);
   
    const [companies, setCompanies] = useState([]);
    const [companyTerm, setCompanyTerm] = useState({});
    const [currentCompany, setCurrentCompany] = useState("");

    
    useEffect(() => {
        async function getCompanies() {
            const companyData = await JoblyApi.getCompanies();
            setCompanies(companyData)
        }
        getCompanies();
    }, []);

     async function lookUpTerm (handle) {
         const company = await JoblyApi.getCompany(handle);
         setCompanyTerm(company);
      
    }; 

    const handleClick = ( e ) => {
        const foundCompany = e.target;
        console.log("FOUUUUUUUUND", foundCompany);
        setCurrentCompany(currentCompany);
    }

    return (
        <>
            <h1>Companies</h1>
            {console.log("ALL", companies)}
            <SearchBar lookUpTerm={lookUpTerm}/>
            {Object.keys(companyTerm).length === 0 ?
                <div>
                 {companies.map(company =>
                <CompanyCard 
                    handle={company.handle}
                    description={company.description}
                    key={company.handle}
                />
            )}
               </div>
              
                :
                <NavLink to={`/companies/${companyTerm.handle}`}> 
                <CompanyCard handle={companyTerm.handle}
                        description={companyTerm.description} />
                </NavLink>
         
            }
            
        </>
    )
}