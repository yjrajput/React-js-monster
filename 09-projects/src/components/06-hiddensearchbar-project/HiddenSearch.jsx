import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import styles from './HiddenSearch.module.css'
const HiddenSearch = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, setbgColor] = useState('White');

    const handleOnClick = (e) =>{
        setbgColor('#1a1a1a');

        if(e.target.className === 'container'){
            setShowInput(false);
            setbgColor('white')
        }
    }
  return (
    <div className={styles.container} style={{backgroundColor: bgColor}} onClick={handleOnClick}>
        
        {
            showInput ?  (
                <input type="text" />
            ) : (
                <FaSearch onClick = {() => setShowInput(true)}/>
            )
        }
        
    </div>
  )
}

export default HiddenSearch