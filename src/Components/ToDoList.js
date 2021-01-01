import React from 'react'; 
import ToDo from './ToDo'; 

function ToDoList({toDos}) {
  return (
    <ul>
      {toDos.map(toDo => {
        return (
          <ToDo 
            key={toDo.id}
            toDo={toDo}
          />
        );
      })}
    </ul>
  ); 
}

export default ToDoList; 