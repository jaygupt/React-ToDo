import React from 'react'; 

function ToDo({toDo, toggleComplete}) {
  function handleCheckboxClick() {
    toggleComplete(toDo.id); 
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
      <button>X</button>
    </div>
  ); 
}

export default ToDo; 