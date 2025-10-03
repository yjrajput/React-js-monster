import React, { useEffect, useState } from 'react'
import BasicEffect from './components/BasicEffect';

const App = () => {
  // const [counter, setCounter] = useState(0);
  // const [something, setSomething] = useState(0);
  const [data, setdate] = useState([]);
  // useEffect(() =>{
  //   console.log('hello ')
  //   document.title = counter
  // }, [counter, something])

  useEffect(() =>{
    const getDate = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      if(data) setdate(data);
    
    }
    getDate();
    
  })
  return (
    <div>
      {/* <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setSomething(counter + 1)}>increment by something</button> */}

      {
        data.map((items) =>(
          <div key={items.id}>
            <h1>Title : {items.title}</h1>
          </div>
        ))
      }
      <hr />
      <BasicEffect/>
    </div>
  )
}

export default App