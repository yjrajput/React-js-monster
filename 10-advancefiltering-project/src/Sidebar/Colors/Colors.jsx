import React from 'react'
import './Colors.css'
const Colors = () => {
  return (
    <div className='color-container'>
      <h2 className='sidebar-title color-title'>Color</h2>
      <label className='sidebar-lable-container'>
          <input type="radio" name='test2' />
          <span className='checkmarks'></span>All
        </label> 
        <label className='sidebar-lable-container'>
          <input type="radio" name='test2' />
          <span className='checkmarks'></span>Black
        </label>  
        <label className='sidebar-lable-container'>
          <input type="radio" name='test2' />
          <span className='checkmarks'></span>Blue
        </label>  
        <label className='sidebar-lable-container'>
          <input type="radio" name='test2' />
          <span className='checkmarks'></span>Red
        </label> 
        <label className='sidebar-lable-container'>
          <input type="radio" name='test2' />
          <span className='checkmarks'></span>Green
        </label>  
        <label className='sidebar-lable-container'>
          <input type="radio" name='test2' />
          <span className='checkmarks'></span>White
        </label>  
    </div>
  )
}

export default Colors