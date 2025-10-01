import React from 'react'
import Greeting from './components/Greeting'
import Productinfo from './components/Productinfo'

const App = () => {
  const name = 'yuvraj singh rathore'
  const age = 22

  const productInfo = {
    name: 'Laptop',
    price: 1500,
    avalible: 'In Stock'
  }
  return (
    <div>
      <Greeting name = {name} age = {age}/>
      <Productinfo productInfo = {productInfo}/>
    </div>
  )
}

export default App