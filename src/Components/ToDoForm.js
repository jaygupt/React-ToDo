import React, {useState} from "react"; 
import {v4 as uuid} from "uuid"; 

function ToDoForm(props) {
    const [toDo, changeToDo] = useState({
        id: "",
        toDoDescription: "",
        isCompleted: false
    });
    
    function onTaskInputChange(event) {
        changeToDo({...toDo, toDoDescription: event.target.value}); 
    }

    function handleSubmit(event) {
        event.preventDefault(); 

        if (toDo.toDoDescription.trim()) {
            // add the ToDo, giving it a unique ID 
            props.addToDo({...toDo, id: uuid()}); 

            // reset the form 
            changeToDo({...toDo, toDoDescription: ""}); 
        } 
    }

    return (
        <form>
            <input
                label="toDo"
                name="toDo"
                type="text"
                value={toDo.taskDescription}
                onChange={onTaskInputChange}
                placeholder="Enter Task Here"
            >               
            </input>    
            <button 
                type="submit"
                onClick={handleSubmit}
            >Submit</button>         
        </form>
    )
}

export default ToDoForm; 