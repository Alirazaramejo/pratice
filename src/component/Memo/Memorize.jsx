
// in React is used to memoize a computed value so that it is only recalculated when one of its dependencies changes. This can improve performance by avoiding unnecessary calculations on every render.


import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // An expensive function to simulate a heavy computation
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Memoize the result of the expensive calculation
  const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Calculated Value: {calculatedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
      <p>Other State: {otherState.toString()}</p>
    </div>
  );
}

export default ExpensiveCalculationComponent;
