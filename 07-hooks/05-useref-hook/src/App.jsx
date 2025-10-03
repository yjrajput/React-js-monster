import React, { useRef } from 'react'
import FocusInput from './componenets/FocusInput'
import Timer from './componenets/Timer'

const App = () => {
  const inputElement = useRef(null)

  const handleOnCLick = () =>{
    console.log(inputElement)
    inputElement.current.focus();
    inputElement.current.value = 'Hello'
  }
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={handleOnCLick}>Focus</button>
      <hr />
      <FocusInput/>
      <hr />
      <Timer/>
    </div>
  )
}

export default App