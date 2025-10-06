import React, { useState } from 'react'
import styles from './Toggle.module.css'
const Toggle = () => {
    const [background, setBackgrouond] = useState('black');
    const [color, setColor] = useState('white');
    const [button, setButton] = useState('white');

    const handleOnClick = () =>{
        if(background === 'black'){
        setBackgrouond('White');
        setColor('black');
        setButton('black')
        }
        else{
            setBackgrouond('black');
        setColor('white');
        setButton('white')
        }
    }
  return (
    <div style={{backgroundColor: background}} className={styles.container}>
        <h1 style={{color: color}} className={styles.heading}>I'm Batman...</h1>
        <button onClick={handleOnClick} style={{color: button}} className={styles.btn}>{button}</button>
    </div>
  )
}

export default Toggle