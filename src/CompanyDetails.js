import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import { JoblyApi } from "./Api";
import { JobCard } from "./jobCard";



export const CompanyDetails = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState({});
    const [jobs, setJobs] = useState([])



    useEffect(() => {
        async function getJob() {
            const JobList = await JoblyApi.getJobs();
            console.log("_____________________________", JobList);
            setJobs([...JobList])
        }
       getJob();
    }, []);

    useEffect(() => { 
        async function CompanyCall() { 
            try {
                 const companyData = await JoblyApi.getCompany(handle);
        setCompany(companyData);
        setJobs([...companyData.jobs])   
            } catch (e) {
               console.log("No company") 
      }
    
    }
    CompanyCall(); 
}, []);
    


    return (
        <div>
           
            {Object.keys(company).length === 0 ?
            <div>  
                    {console.log("all jobs")} 
                        {jobs.map(job => <JobCard title={job.title} salary={job.salary} equity={job.equity} key={job.id} />)}
                    </div>
                    :

                    <div>
                    {console.log("one company")}  {console.log("################", company)}
                <p > { company.name }</p >
                    <p>{company.description}</p>
    {jobs.map(job => <JobCard title={job.title} salary={job.salary} equity={job.equity} key={job.id} />)

            }
            </div>
        }
        </div>
    )
}