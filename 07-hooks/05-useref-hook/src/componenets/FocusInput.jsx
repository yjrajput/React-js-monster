import React, { useRef } from 'react'

const FocusInput = () => {
    const element = useRef(null);

    const handleOnClick = () =>{
        element.current.focus();
    }
  return (
    <div>
        <input type="text" ref={element} placeholder='Enter here'/>
        <button onClick={handleOnClick}>Focus</button>
    </div>
  )
}

export default FocusInput