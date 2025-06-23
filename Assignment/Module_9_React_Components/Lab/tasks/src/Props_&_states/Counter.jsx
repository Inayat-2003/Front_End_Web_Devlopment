import React, { useState } from 'react';
// Task 2:Create a Counter component with a button that increments a count value usingReact
// state. Display the current count on the screen.
function Counter() {
  const [count, setCount] = useState(0);

  function click() {
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Count: {count}</h2>
      <button onClick={click} style={{
        padding: '10px 20px',
        fontSize: '18px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Increase
      </button>
    </div>
  );
}

export default Counter;