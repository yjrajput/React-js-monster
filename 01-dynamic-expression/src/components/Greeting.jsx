import React from 'react'

const Greeting = (props) => {
  return (
    <div>
        <h1>Hello my name is {props.name} and i'm {props.age} year old.</h1>
    </div>
  )
}

export default Greeting