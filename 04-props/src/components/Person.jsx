import React from 'react'

const Person = ({name, age}) => {
  return (
    <div>
        <h1>Hello world my name is {name}</h1>
        <p>And i'm {age} year old</p>
    </div>
  )
}

export default Person