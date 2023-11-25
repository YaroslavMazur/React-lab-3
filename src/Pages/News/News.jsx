import React, { useState } from "react";
import css from "./News.module.css";
import NewsItem from "../../components/NewsItem/NewsItem";

export default function News(){

    const [newsData,setNewsData] = useState([{
        title:"news1",
        text:"text1",
    },

    {
        title:"news2",
        text:"text2",
    },
    
    {
        title:"news3",
        text:"text3",
    },

    ])

    return(
        <div className={css.newsContainer}>
            {newsData.map((obj)=>(<NewsItem title = {obj.title} text = {obj.text}/>))}
        </div>
    )
}