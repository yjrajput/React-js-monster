import React, { useEffect, useState } from 'react'

const BasicEffect = () => {
    const [value, setValue] = useState(0);

    useEffect(() =>{
        document.title = `Increment ${value}`
    }, [value])
  return (
    <div>
        <h1>Increment: {value}</h1>
        <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  )
}

export default BasicEffect