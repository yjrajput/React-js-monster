import { useState } from "react"


const ComponentOne = () => {
   const [count, setCount] = useState(() =>{
    const initialValue = 10;
    return initialValue;
   })
  return ( 
    <div>
        <h1>Count {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default ComponentOne