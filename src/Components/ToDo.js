import React from 'react'; 

function ToDo({toDo, toggleComplete, removeToDo}) {
  function handleCheckboxClick() {
    toggleComplete(toDo.id); 
  }

  function handleTaskDelete() {
    removeToDo(toDo.id); 
  }

  return (
    <div style={{display: "flex"}}>
      <input 
        type="checkbox"
        checked={toDo.isCompleted}
        onClick={handleCheckboxClick}
      ></input>
      <li style={{
        color: "white",
        textDecoration: toDo.isCompleted ? "line-through" : null
      }}>
        {toDo.toDoDescription}
      </li>
      <button
        onClick={handleTaskDelete}
      >X</button>
    </div>
  ); 
}

export default ToDo; 