import React, { useContext } from "react";
import { UserContext } from "./userContext";




export const Home = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <>{currentUser ? <h1>Welcome Back {currentUser.user.username}!  </h1> :
        <h1>Welcome to Jobly </h1>
        }
            
        </>
    )
}