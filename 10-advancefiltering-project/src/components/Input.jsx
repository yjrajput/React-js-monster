import React from 'react'

const Input = ({items}) => {
  return (
    <>
      <label className='sidebar-lable-container'>
          <input type="radio" name='test' />
          <span className='checkmarks'></span>{items}
        </label>  
    </>
  )
}

export default Input