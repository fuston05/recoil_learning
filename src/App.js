import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {atom, useRecoilState} from 'recoil';

const count= atom({
  key: 'count',
  default: 0
});


function App() {
  // old
  // const [count, setCount] = useState(0);
  // new
  const [countState, setCount]= useRecoilState(count);

  return (
    <div className="App">
      <h1>{countState}</h1>
      <button
        onClick={() => setCount(countState + 1)}
      >Increase Count</button>
    </div>
  );
}

export default App;
