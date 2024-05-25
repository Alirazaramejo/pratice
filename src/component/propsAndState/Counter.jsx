// Counter.js (Child Component)
import React from 'react';

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
