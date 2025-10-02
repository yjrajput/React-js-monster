import React from 'react'
import Person from './components/Person'
import Product from './components/Product'


const User = (props) =>{
  return(
    <div>
      <img src={props.img} alt="" />
      <h1>My name is {props.name}</h1>
      <p>Age is : {props.age}</p>
      <ul>
        My hobbies
        {
          props.hobbies.map((items) =>(
            <li>{items}</li>
          ))
        }
      </ul>

    </div>
  )
}
const App = () => { 
  const hobbies = ['coding', 'playing', 'lifting', 'sleeping']
  const name = 'yuvraj singh rathore'
  const age = 22

  const product = {
    name: 'Laptop',
    price: 1500
  }
  return (
    <div>
      <User name = 'yuvraj singh rathore' age = {22} img = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xZ-Dad8MElzAFU9iBlSx4qAMtYpnKzEt_Q&s'} hobbies = {hobbies}/>
      <hr />

      <Person name = {name} age = {age}/>
      <hr />
      <Product product = {product}/>
    </div>
  )
}

export default App