
import React, { useState, useEffect, useContext} from "react";
import { CompanyCard } from "./CompanyCard";
import { JoblyApi } from "./Api";
import { CompanyDetails } from "./CompanyDetails";
import { NavLink, useNavigate} from "react-router-dom";
import { RouteComponent } from "./RouteComponent";
import { SearchBar } from "./SearchBar";
import { UserContext } from "./userContext";


export const Jobs = () => {
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

    async function lookUpTerm(handle) {
        const company = await JoblyApi.getCompany(handle);
        setCompanyTerm(company);

    };

    const handleClick = (e) => {
        const foundCompany = e.target;
        console.log("FOUUUUUUUUND", foundCompany);
        setCurrentCompany(currentCompany);
    }

    return (
        <>
            <h1>Jobs</h1>
            
        

        </>
    )
}


