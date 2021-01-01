import { useState } from 'react';
import './App.css';
import Header from './Components/Header'; 
import ToDoForm from './Components/ToDoForm'; 
import ToDoList from './Components/ToDoList'; 

function App() {
  const [toDos, changeToDos] = useState([]); 

  function addToDo(newToDo) {
    changeToDos([...toDos, newToDo]); 
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* Eventually use Typography here  */}
        <Header /> 
        <ToDoForm 
        addToDo={addToDo}
        />
        <ToDoList 
          toDos={toDos}
        />
      </header>
    </div>
  );
}

export default App;
