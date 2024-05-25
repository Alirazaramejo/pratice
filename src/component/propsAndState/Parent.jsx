// App.js (Parent Component)
import React, { useState } from 'react';
import Counter from './Counter.jsx';

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <Counter count={count} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
};

export default Parent;
