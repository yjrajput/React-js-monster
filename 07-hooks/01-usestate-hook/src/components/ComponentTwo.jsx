import React, { useState } from 'react'

const ComponentTwo = () => {
    const [randomNumber, setRandomNumber] = useState(() =>{
        const randomnumber = Math.round(Math.random() * 100);
        return randomnumber;
    })
  return (
    <div>
        <h1>Randomnumber: {randomNumber}</h1>
        <button onClick={() => setRandomNumber(Math.round(Math.random() * 100))}>Update</button>
    </div>
  )
}

export default ComponentTwo