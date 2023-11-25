import React from "react";
import css from "./ListItem.module.css";

export default function ListItem({id,text, isChecked,index, handleDeleteToDo,handleCheck}){

    return(
        <div className={css.itemContainer} data-id={id}> 
            <p>{index + 1}.</p>
            <input type = "checkbox" 
                checked={isChecked}
                onChange={()=>handleCheck(id)}
            />
            <p className={css.itemText}>{text}</p>
            <button className={css.itemDelete} onClick={()=>handleDeleteToDo(id)}>x</button>
        </div>
    )
}