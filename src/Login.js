import React, { useState  } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./userContext";


export const Login = ({login, setToken}) => {
    const navigate = useNavigate();
    const form = {
        username: "",
        password: "",
    };

    const [authenticate, setAuthenticate] = useState(form);


    async function handleSubmit(e) {
        try {
             e.preventDefault();
            login(authenticate.username, authenticate.password);
            console.log("success")
        navigate("/");  
        } catch (e) {
            console.error("Error:", e);
        }
     
    }



    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthenticate(auth => ({
            ...auth,
            [name]: value
        }));
    };



    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                {

                }
                <label htmlFor="username"><b>Username</b></label>
                <input
                    name="username"
                    type="text"
                    onChange={handleChange}
                    value={authenticate.username}
                />

                <label htmlFor="password"><b>Password</b></label>
                <input
                    name="password"
                    type="text"
                    onChange={handleChange}
                    value={authenticate.password}
                />

                <br />
                <button> Submit </button>
            </form>


        </>
    )
}