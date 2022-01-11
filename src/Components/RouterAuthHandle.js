import React from "react";
import { isLogged } from "../helpers/AuthHandler";
import {Navigate } from "react-router-dom";

const AuthLoggin = ({ children}) => {
    let logged = isLogged();
    

    if (logged){
        return children
    }else {
        return <Navigate to="/signin"/>
    }

    
    
}


export default AuthLoggin;