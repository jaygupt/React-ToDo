import React from 'react'; 

function ToDo({toDo}) {
  return (
    <div style={{display: "flex"}}>
      <input type="checkbox"></input>
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