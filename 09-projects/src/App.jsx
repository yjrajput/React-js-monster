import React from 'react'
import Counter from './components/01-counter-project/Counter'
import './App.css'
import Todolist from './components/02-todolist-project/Todolist'
import Meals from './components/03-meals-project/Meals'
import Calculator from './components/04-calculator-project/Calculator'
const App = () => {
  return (
    <div className='main-container'>
      {/* <Counter/> */}
      {/* <Todolist/> */}
      {/* <Meals/> */}
      <Calculator/>
    </div>
  )
}

export default App