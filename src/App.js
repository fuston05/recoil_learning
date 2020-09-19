import React from 'react';
import './App.css';

// components
import {CounterApp} from './components/CounterApp';
import {TodoList} from './components/todoList';

function App() {
  // old way of storing state
  // const [count, setCount] = useState(0);
  // new

 

  return (
    <div className="App">
      <CounterApp />
      <TodoList />
    </div>
  );
}

export default App;
