// Task 1: Create a functional component with a counter using the useState() hook. Include
// buttons to increment and decrement the counter.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increse</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Counter;