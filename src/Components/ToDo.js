import React from 'react'; 
import {ListItem, IconButton, Checkbox, Typography} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function ToDo({toDo, toggleComplete, removeToDo}) {
  function handleCheckboxClick() {
    toggleComplete(toDo.id); 
  }

  function handleTaskDelete() {
    removeToDo(toDo.id); 
  }

  return (
    <ListItem style={{display: "flex"}}>
      <Checkbox 
        type="checkbox"
        onClick={handleCheckboxClick}
      ></Checkbox>
      <Typography 
        variant="body1"
        style={{
          textDecoration: toDo.isCompleted ? "line-through" : null
        }}>
        {toDo.toDoDescription}
      </Typography>
      <IconButton
        onClick={handleTaskDelete}
      ><CloseIcon />
      </IconButton>
    </ListItem>
  ); 
}

export default ToDo; 