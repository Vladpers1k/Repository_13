import React, { useState } from 'react'

const StatefulCounter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div>
      <h2>Stateful Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default StatefulCounter
