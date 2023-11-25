import React, {useState} from "react";
import css from "./ToDoList.module.css";
import List from "../../components/List/List.jsx";
import InputToDo from "../../components/InputToDo/InputToDo.jsx"

export default function ToDoList(){

    const [dataList, setDataList] = useState([]);


    const addNewToDo = (itemToDoObj)=>{
        setDataList([...dataList, itemToDoObj]);
    }

    const handleDeleteToDo =(id)=>{
        setDataList(
            dataList.filter((obj)=> obj.id !== id));
    }

    const handleCheck = (id)=>{

        let itemIndex = dataList.findIndex((obj)=> obj.id === id);
        let newDataList = [...dataList];

        newDataList[itemIndex].isChecked = !newDataList[itemIndex].isChecked;
        
        setDataList(newDataList);
    }

    return(
        
        <div className={css.ToDoContainer}>
            <InputToDo addNewToDo={addNewToDo}/>
            <List 
                dataList = {dataList} 
                handleDeleteToDo = {handleDeleteToDo}
                handleCheck = {handleCheck}/>
        </div>

        
    )

}