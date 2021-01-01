import {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header'; 
import ToDoForm from './Components/ToDoForm'; 
import ToDoList from './Components/ToDoList'; 

const LOCAL_STORAGE_KEY = "toDo-App-toDos"; 

function App() {
  const [toDos, setToDos] = useState([]);  

  // fired when App.js is initially rendered   
  useEffect(() => {
    // get all of the toDos from storage 
    const toDosInStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 
    
    // if they exist, display them
    if (toDosInStorage) {
      setToDos(toDosInStorage); 
    }
  }, []); 

  // fired when toDos array changes
  useEffect(() => {
    // store the whole toDos array in local storage 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos)); 
  }, [toDos]);

  function addToDo(newToDo) {
    setToDos([...toDos, newToDo]); 
  }

  function toggleComplete(id) {
    setToDos(
      toDos.map(toDo => {
        if (toDo.id === id) {
          return {
            ...toDo,
            isCompleted: !toDo.isCompleted
          };  
        }

        return toDo; 
      })
    );
  }

  function removeToDo(id) {
    setToDos(toDos.filter(toDo => toDo.id !== id)); 
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
          toggleComplete={toggleComplete}
          removeToDo={removeToDo}
        />
      </header>
    </div>
  );
}

export default App;
