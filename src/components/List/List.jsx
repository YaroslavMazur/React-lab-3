import React from "react";
import css from "./List.module.css";
import ListItem from "../ListItem/ListItem";


export default function List({dataList, handleDeleteToDo,handleCheck}){
    console.log(dataList);
    
    return (
        <div className={css.listContainer}>
            {dataList.map((obj, index) => (
                <ListItem
                    key={obj.id}
                    id = {obj.id}
                    index={index}
                    text={obj.text} 
                    isChecked={obj.isChecked} 
                    handleDeleteToDo={handleDeleteToDo}
                    handleCheck = {handleCheck}
                />
            ))}
        </div>
    )
}