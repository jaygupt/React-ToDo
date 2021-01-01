import React from 'react'; 
import ToDo from './ToDo'; 

function ToDoList({toDos, toggleComplete, removeToDo}) {
  return (
    <ul>
      {toDos.map(toDo => {
        return (
          <ToDo 
            key={toDo.id}
            id={toDo.id}
            toDo={toDo}
            toggleComplete={toggleComplete}
            removeToDo={removeToDo}
          />
        );
      })}
    </ul>
  ); 
}

export default ToDoList; 