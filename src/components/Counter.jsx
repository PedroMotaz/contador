import React, { useState } from 'react';
import Screen from './Screen';
import Buttons from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <Screen value={count} />
      <Buttons onIncrement={increment} onDecrement={decrement} onReset={reset} />
    </div>
  );
};

export default Counter;
