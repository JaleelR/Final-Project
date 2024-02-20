import React, { useState, useEffect } from "react";
import { CompanyCard } from "./CompanyCard";
import { JoblyApi } from "./Api";
import { CompanyDetails } from "./CompanyDetails";
import { NavLink } from "react-router-dom";
import { RouteComponent } from "./RouteComponent";
import { SearchBar } from "./SearchBar";
export const Companies = () => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        async function getCompanies() {
            const companyData = await JoblyApi.getCompanies();
            setCompanies(companyData)
        }
        getCompanies();
    }, []);
    return (
        <>
            <h1>Companies</h1>
            <SearchBar/>

            <NavLink to="/companies/:name"> 
            {companies.map(company =>
                    <CompanyCard 
                        handle={company.name}
                    description={company.description}
                    key={company.handle}
                />
       
            )}
                 </NavLink>
        </>
    )
}