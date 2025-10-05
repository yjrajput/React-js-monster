import React from 'react'
import Counter from './components/01-counter-project/Counter'
import './App.css'
import Todolist from './components/02-todolist-project/Todolist'
const App = () => {
  return (
    <div className='main-container'>
      {/* <Counter/> */}
      <Todolist/>
    </div>
  )
}

export default App