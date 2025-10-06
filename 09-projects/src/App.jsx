import React from 'react'
import Counter from './components/01-counter-project/Counter'
import './App.css'
import Todolist from './components/02-todolist-project/Todolist'
import Meals from './components/03-meals-project/Meals'
import Calculator from './components/04-calculator-project/Calculator'
import Toggle from './components/05-togglebackground-project/Toggle'
const App = () => {
  return (
    <div className='main-container'>
      {/* <Counter/> */}
      {/* <Todolist/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      <Toggle/>
    </div>
  )
}

export default App