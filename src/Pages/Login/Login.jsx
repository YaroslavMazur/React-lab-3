import React,{useEffect, useState} from "react";
import css from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login(){
    
    const navigate = useNavigate();
    const [isRightData, setIsRightData] = useState(true);


    const handleSubmit= (e)=>{
        e.preventDefault();
        let login = e.target.userName.value;
        let password = e.target.userPassword.value;

        if(password === "12345" && login === "admin"){
            localStorage.setItem("userData", "true");
            setIsRightData(true);

            navigate("/");
        }
        else{
            setIsRightData(false)
        }

    }
    
    return(
        <form onSubmit={handleSubmit} className={css.formContainer}>
            <input type="text" name="userName" placeholder="login"/>
            <input type="password" name="userPassword" placeholder="password"/>
            {isRightData === false? <p style={{color:"white"}}>Ім'я користувача,або пароль введені не вірно</p>:""}
            <button type="submit">Submit</button>
        </form>
    )
}