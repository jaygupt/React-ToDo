import React, {useState} from "react"; 

function ToDoForm() {
    const [toDo, changeToDo] = useState({
        id: "",
        toDoDescription: "",
        isCompleted: false
    });
    
    function onTaskInputChange(event) {
        changeToDo({...toDo, toDoDescription: event.target.value}); 
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
            <button type="submit">Submit</button>         
        </form>
    )
}

export default ToDoForm; 