import React, {useState} from "react"; 

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
            props.addToDo(toDo); 
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