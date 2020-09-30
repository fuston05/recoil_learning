// counter app | Recoil test

import React from 'react';
// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { count } from '../recoil/atoms';
import { isEvenCount } from '../recoil/selectors';

const CounterApp = () => {
  // creates a subscription to state now
  const [countState, setCount] = useRecoilState(count);
  const value = useRecoilValue(isEvenCount);

  return (
    <div className='counterApp'>
      <h1>{countState}</h1>

      <button
        onClick={() => setCount(countState - 1)}>
        Decrease Count
      </button>

      <button
        onClick={() => setCount(countState + 1)}>
        Increase Count
      </button>

      <h4>
        {`Is Even: ${value}`}
      </h4>
    </div>
  )
}

export {
  CounterApp,
}