import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react';


const App = () => {
  const initialState = {count: 0};

  const reducer = (state, action) =>{
    if(action.type === 'increment'){
      return {...state, count: state.count + 1}
    }else if(action.type === 'decrement'){
      return {...state, count: state.count - 1}
    }else if(action.type === 'IncrementByAmount'){
      return {...state, count: state.count + action.payload }
    }else if(action.type === 'DecrementByAmount'){
      return {...state, count: state.count - action.payload}
    }
    else if(action.type === 'reset'){
      return {...state, count: 0}
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState();

  const IncrementByAmount = () =>{
    dispatch({type: 'IncrementByAmount', payload: Number(input)})
    setInput('')
  }
  const DecrementByAmount = () =>{
    dispatch({type: 'DecrementByAmount', payload: Number(input)})
    setInput('')
  }

  return (
    <div>
      <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={IncrementByAmount}>IncrementByAmount</button>
      <button onClick={DecrementByAmount}>DecrementByAmount</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      
      </div>
      <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />

      {/* <CounterReducer/> */}
    </div>
  )
}

export default App