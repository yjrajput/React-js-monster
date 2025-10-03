import React, { useEffect, useState } from 'react'

const ComponentThree = () => {
    const[savedName, setSavedName] = useState(() =>{
        const savedName = localStorage.getItem('name');
        return savedName ? JSON.parse(savedName) : ''
    })

    useEffect(()=>{
        localStorage.setItem('name', JSON.stringify(savedName))
    },[savedName])
    
    const handleOnClear = () =>{
        setSavedName('')
    }
  return (
    <div>
        <h1>Name: {savedName}</h1>
        <input type="text" value={savedName} onChange={(e) => setSavedName(e.target.value)}/>
        <button onClick={handleOnClear}>Clear name</button>
    </div>
  )
}

export default ComponentThree