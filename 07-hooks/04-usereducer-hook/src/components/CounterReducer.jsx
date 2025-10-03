import React from 'react'
import { useReducer } from 'react';

const CounterReducer = () => {
    const initailCount = {count: 0};
    const reducer = (state, action) =>{
        action.type === 'increment' ? {...state, count: state.count + 1} : action.type === 'decrement' ? {...state, count: state.count -1} : action.type === 'reset' ? {count: 0} : action
    }

    const [state, dispatch] = useReducer(reducer, initailCount);

    
  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>
    </div>
  )
}

export default CounterReducer