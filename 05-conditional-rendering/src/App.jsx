import React from 'react'
import Cart from './components/Cart'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'
const ValidPassword = () =>{
  return <h1>Valid Password</h1>
}

const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid}) =>{
  if(isValid) return <ValidPassword/>
  else return <InvalidPassword/>
}
const App = () => {
  const CartItems = ['Headphone', 'Mobile', 'Laptop', 'Charger']
  return (
    <div>
      <Password isValid = {true}/>
      <hr />
      <Cart CartItems = {CartItems}/>
      <hr />
      <Weather tempreture = {26}/>
      <hr />
      <UserStatus isAdmin = {false} isLogin = {true}/>
      <hr />
      <Greeting timeOfDay = {'evening'}/>
    </div>
  )
}

export default App