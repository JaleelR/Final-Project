import React from "react";



export const JobCard = ({ title, salary, equity }) => {

    return (
        <div>
                <h6 > {title}</h6>
                <p>Salary: { salary } </p>
                <p> Equity: {equity} </p>
                <button>Apply</button>
        </div>
    )
}; 