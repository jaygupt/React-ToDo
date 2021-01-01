import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {v4 as uuid} from "uuid"; 

function ToDoForm(props) {
    const [toDo, setToDo] = useState({
        id: "",
        toDoDescription: "",
        isCompleted: false
    });
    
    function onTaskInputChange(event) {
        setToDo({...toDo, toDoDescription: event.target.value}); 
    }

    function handleSubmit(event) {
        event.preventDefault(); 

        if (toDo.toDoDescription.trim()) {
            // add the ToDo, giving it a unique ID 
            props.addToDo({...toDo, id: uuid()}); 

            // reset the form 
            setToDo({...toDo, toDoDescription: ""}); 
        } 
    }

    return (
        <form className="toDo-form">
            <TextField
                autoFocus={true}
                label="To-Do"
                name="toDo"
                type="text"
                size="medium"
                value={toDo.toDoDescription}
                onChange={onTaskInputChange}
                placeholder="Enter Task Here"
            >               
            </TextField>    
            <Button 
                variant="contained" 
                color="primary" 
                type="submit"
                onClick={handleSubmit}
            >Submit</Button>         
        </form>
    )
}

export default ToDoForm; 