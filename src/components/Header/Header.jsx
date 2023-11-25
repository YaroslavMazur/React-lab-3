import React from "react";
import {Link} from "react-router-dom";
import css from "./Header.module.css";

export default function Header(){

    return(
        <nav className={css.navContainer}>
            <Link  to = "/" className={css.logo}>To Do App</Link>
            <div className={css.rightMenu}>
                <Link to = "/news">News</Link>
                <Link to ="/profile">Profile</Link>
                <Link to = "/login">Log in</Link>
            </div>
        </nav>
    )
}