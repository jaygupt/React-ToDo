import React from 'react'; 
import ToDo from './ToDo'; 
import List from '@material-ui/core/List';

function ToDoList({toDos, toggleComplete, removeToDo}) {
  return (
    <List>
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
    </List>
  ); 
}

export default ToDoList; 