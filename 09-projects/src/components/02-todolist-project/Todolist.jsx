
import { useEffect } from 'react';
import styles from './Todolist.module.css'
import { useState } from 'react'
const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const newItems = { input, date };

        if (input.trim() && date) {
            setTodos([...todos, newItems]);
            setInput('');
            setDate('')
        }

    }



    const handleOnRemove = (index) => {
        setTodos(todos.filter((_, id) => id !== index))
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Todo List</h1>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder='Enter todo here...' value={input} onChange={(event) => setInput(event.target.value)} />
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
                <button type='submit'>Add todo</button>
            </form>

            {
                todos.map((items, index) => (
                    <div className={styles['output-container']} key={index}>
                        <li>{items.input}</li>
                        <li>{items.date}</li>
                        <button onClick={() => handleOnRemove(index)}>Remove</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Todolist