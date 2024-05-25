import React, { useState, useEffect } from 'react';

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to ${count}`);
  }, [count]); // Dependency array with `count`

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Effect;
