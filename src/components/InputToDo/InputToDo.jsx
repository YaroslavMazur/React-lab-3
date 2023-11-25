import React, {useState} from "react";
import css from "./InputToDo.module.css";
import {v4 as uuidv4} from "uuid";


export default function InputToDo({addNewToDo}){

    const [inputValue, setInputValue] = useState("");

    const handleSetValue = (value)=>{
        setInputValue(value);
        console.log(inputValue);

    }

    const handleAddToDo = () => {

        addNewToDo({id: uuidv4(),
                    text: inputValue,
                    isChecked: false,});
        setInputValue("");
    }

    return(
        <div className={css.inputContainer}>
            <input 
                className = {css.inputToDo}
                type = "text"
                placeholder="Input text"
                onChange={(event) => handleSetValue(event.target.value)}
                value={inputValue}
            />
            <button 
                className={css.inputToDoBtn}
                onClick={handleAddToDo}
            >Add To Do</button>
        </div>
    )
}
