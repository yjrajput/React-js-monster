import React from 'react'
import Counter from './components/01-counter-project/Counter'
import './App.css'
import Todolist from './components/02-todolist-project/Todolist'
import Meals from './components/03-meals-project/Meals'
import Calculator from './components/04-calculator-project/Calculator'
import Toggle from './components/05-togglebackground-project/Toggle'
import HiddenSearch from './components/06-hiddensearchbar-project/HiddenSearch'
import Testimonial from './components/07-testimonial-project/Testimonial'
import Accordion from './components/08-accordion-project/Accordion'
import Form from './components/09-form-project/Form'
const App = () => {
  return (
    <div className='main-container'>
      {/* <Counter/> */}
      {/* <Todolist/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <Toggle/> */}
      {/* <HiddenSearch/> */}
      {/* <Testimonial/> */}
      {/* <Accordion/> */}
      <Form/>
    </div>
  )
}

export default App