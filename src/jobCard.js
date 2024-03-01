import React, {useState, useContext } from "react";
import { UserContext } from "./userContext";


export const JobCard = ({ title, salary, equity, id}) => {
    const { currentUser, hasAppliedToJob, apply } = useContext(UserContext);
    const [  click, setClick ] = useState(false);
    function handleClick() {
        apply(id);
        setClick(true);
     }

    return (
        <div>
                <h6 > {title}</h6>
                <p>Salary: { salary } </p>
            <p> Equity: {equity} </p>
            {!click ? <button onClick={handleClick}  >Apply</button> 
                :
                <p>Applied</p>

            }
                
        </div>
    )
}; 