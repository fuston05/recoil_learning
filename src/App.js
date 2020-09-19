import React from 'react';
import './App.css';

// components
import {CounterApp} from './components/CounterApp';

function App() {
  // old way of storing state
  // const [count, setCount] = useState(0);
  // new

 

  return (
    <div className="App">
      <CounterApp />
    </div>
  );
}

export default App;
