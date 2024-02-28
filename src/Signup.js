import React, { useState, useEffect, } from "react";
import { useNavigate} from "react-router-dom"
import { JoblyApi } from "./Api";
// import {useHistory} from "react-router-dom"



export const Signup = ({register}) => {
const navigate = useNavigate()
 
  
    // const history = useHistory();
        const form = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
        };
    
    
    const [signup, setSignup] = useState(form);
    async function handleSubmit(e) {
        e.preventDefault();
        register(signup.username, signup.password, signup.firstName, signup.lastName, signup.email);
        navigate("/");
       
        }
       

    




    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignup( prevState => ({
            ...prevState,
            [name]: value
        }));


    };



    return (
        <>
            <h1>Signup</h1>

            { console.log(signup)}
         
            <form onSubmit={handleSubmit}>
                {
                
                }
                <label htmlFor="username"><b>Username</b></label>  
                <input
                    name="username"
                    type="text"
                    onChange={handleChange}
                    value={signup.username}
                />

                <label htmlFor="password"><b>Password</b></label> 
                <input
                    name="password"
                    type="text"
                    onChange={handleChange}
                    value={signup.password}
                />

                <label htmlFor="firstName"><b>First name</b></label> 
                <input
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                    value={signup.firstName}
                />

                <label htmlFor="lastName"><b>Last name</b></label> 
                <input
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    value={signup.lastName}
                />

                <label htmlFor="email"><b>Email</b></label> 
                <input
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={signup.email}
                />

                <br/>
                <button> Submit </button>
            </form>


        </>
    )
            }