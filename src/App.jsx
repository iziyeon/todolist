//App.jsx

import TodoApp from './Components/todo';  
import RandomQuote from './Components/famous_saying';  
import Timer from './Components/time';  
import './style.css';

function App() {
  return (
    <div>
      <Timer /> 
      <RandomQuote /> 
      <TodoApp /> 

    </div>
  );
}

export default App;