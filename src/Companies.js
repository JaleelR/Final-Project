import React, { useState, useEffect, useContext } from "react";
import { CompanyCard } from "./CompanyCard";
import { JoblyApi } from "./Api";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { UserContext } from "./userContext";


export const Companies = () => {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();  
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

    if (!currentUser) {
        navigate("/");
        return null;
    } 
    return (
    
        <>
            <h1>Companies</h1>
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