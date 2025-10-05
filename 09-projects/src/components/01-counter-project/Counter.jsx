
import styles from './Counter.module.css'
import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0);

    const handleOnAdd = () =>{
        setCount(count + 1)
    }
    const handleOnRemove = () =>{
        if(count > 0)
        setCount(count - 1)
    }
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>{count}</h1>
        <div className={styles['btn-container']}>
            <button  onClick={handleOnAdd}>+</button>
            <button  onClick={handleOnRemove}>-</button>
        </div>
    </div>
  )
}

export default Counter