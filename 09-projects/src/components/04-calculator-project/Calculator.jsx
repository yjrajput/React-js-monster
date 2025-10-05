import React, { useState } from 'react'
import styles from './Calculator.module.css'
const Calculator = () => {
    const [input, setInput] = useState('');
    const buttonArray = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0', '=', '.'];

    const handleOnCLick = (buttons) =>{
        if(buttons === 'C'){
            setInput('')
        }else if(buttons === '='){
            const result = eval(input);
            setInput(result)
        }else {
            setInput(prev => prev + buttons)
        }
    }
  return (
    <div className={styles['main-container']}>
        <div className={styles.container}>
            <input type="text" readOnly onChange={(e) => setInput(e.target.value)} value={input}/>
            {
                buttonArray.map((buttons, index) =>(
                    <button onClick={() =>handleOnCLick(buttons)} key={index}>{buttons}</button>
                ))
            }
        </div>
    </div>
  )
}

export default Calculator