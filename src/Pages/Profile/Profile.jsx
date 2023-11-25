import React from "react";
import {useNavigate,Navigate} from "react-router-dom";
import css from "./Profile.module.css";


export default function Profile(){

    const navigate = useNavigate();

    if(localStorage.getItem("userData") === "false"){
        return <Navigate to ="/login"/>;
    }

    const handleLogOut = ()=>{
        localStorage.setItem("userData", "false");
        navigate("/");

    }

    return(
        <div>
            <p>accountName</p>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    )
    
}