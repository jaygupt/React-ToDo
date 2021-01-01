import './App.css';
import Header from './Components/Header'; 
import ToDoForm from './Components/ToDoForm'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Eventually use Typography here  */}
        <Header /> 
        <ToDoForm />
      </header>
    </div>
  );
}

export default App;
