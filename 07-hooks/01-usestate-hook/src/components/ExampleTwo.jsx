import React, { useState } from 'react'

const ExampleTwo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('')

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        
        setTodos([...todos, input]);

        setInput('')
    }
  return (
    <div>
        <h1>Todos</h1>
        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder='Enter todo here' value={input} onChange={(event) => setInput(event.target.value)} />
            <button type='submit'>Submit</button>
        </form>

        <ul>
            {
                todos.map((items, index) =>(
                    <li key={index}>{items}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ExampleTwo