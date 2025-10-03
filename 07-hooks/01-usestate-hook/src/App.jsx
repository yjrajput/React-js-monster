import React, { useState } from 'react'
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThree from './components/ComponentThree';
import ExampleOne from './components/ExampleOne';
import ExampleTwo from './components/ExampleTwo';
import Profile from './components/Profile';
import ShoopingList from './components/ShoopingList';


//updating array of content
const Movie = () =>{
  const Movies = ['Spiderman', 'Superman'];
  const [movie, updateMovie] = useState(Movies);

  const handleOnUpdate = () =>{
    updateMovie( movie.map((m) => m === 'Spiderman' ? 'Jhon Wick' : m))
  }

  const handleOnAdd = () =>{
    updateMovie([...movie, 'Batman'])
  }

  const handleOnRemove = () =>{
    updateMovie(movie.filter((m) => m !== 'Superman'))
  }
  return(
    <div>
      {
        movie.map((m) =>(
          <h1 key={Math.random()}>{m}</h1>
        ))
      }
      <button onClick={handleOnUpdate}>Update movies</button>
      <button onClick={handleOnAdd}>Add movie</button>
      <button onClick={handleOnRemove}>Remove movie</button>
    </div>
  )
}


//updating objects of content
const Firends = () =>{
  
  const [friend, setFriend] = useState({
    name: 'Yuvraj',
    age: 22
  })

  const addFriend = () =>{
    setFriend({...friend, name: 'jhon'} )
  }
  return(
    <div>
        <h1>Name: {friend.name}</h1>
        <p>Age: {friend.age}</p>

        <button onClick={addFriend}>update</button>
    </div>
  )
}


//array of objects
const Products = () =>{
  const [products, setProducts] = useState([
    {id: 1, name: 'Laptop', price: 1500},
    {id: 2, name: 'Phone', price: 1000},
  ])

  const upadteProductName = () =>{
    setProducts(products.map((m) =>( m.id === 1 ? {...products, name: 'Headphone'} : m)))
  }
  return(
    <div>
       {
        products.map(({id, name, price}) =>(
          <div key={id}>
          <li >Name: {name}</li>
          <li>Price: {price}</li>
          </div>
        ))
       }
       <button onClick={upadteProductName}>Update name</button>
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  
  const handleOnDecrement = () =>{
    if(counter > 0)
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={handleOnDecrement}>Decrement</button>
      <hr />
      <Movie/>
      <hr />
      <Firends/>
      <hr />
      <Products/>
      <hr />
      <ComponentOne/>
      <hr />
      <ComponentTwo/>
      <hr />
      <ComponentThree/>
      <hr />
      <ExampleOne/>
      <hr />
      <ExampleTwo/>
      <hr />
      <Profile/>
      <hr />
      <ShoopingList/>
    </div>
  )
}

export default App