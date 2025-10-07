import React from 'react'

const Button = ({ items, setSelectedCategory }) => {
  return (
    <>
    <button onChange={(e) => setSelectedCategory(e.target.value)} className='btns'>{items}</button>
    
    </>

  )
}

export default Button