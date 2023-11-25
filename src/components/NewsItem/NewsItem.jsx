import React from "react";
import css from "./NewsItem.module.css";

export default function NewsItem({text, title}){
    return(
        <div className={css.newsItemContainer}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}