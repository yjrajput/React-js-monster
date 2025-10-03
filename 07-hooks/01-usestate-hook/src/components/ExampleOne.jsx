import React, { useState } from 'react'

const ExampleOne = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => counter > 0 ? setCounter(counter -1 ) : counter}>Remove</button>
    </div>
  )
}

export default ExampleOne