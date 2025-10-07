import React from 'react'
import './Category.css'
const Category = () => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div className='sidebar-items'>
        <label className='sidebar-lable-container'>
          <input type="radio" name='test' />
          <span className='checkmarks'></span>All
        </label>  
        <label className='sidebar-lable-container'>
          <input type="radio" name='test' />
          <span className='checkmarks'></span>Sneakers
        </label>  
        <label className='sidebar-lable-container'>
          <input type="radio" name='test' />
          <span className='checkmarks'></span>Flats
        </label>  
        <label className='sidebar-lable-container'>
          <input type="radio" name='test' />
          <span className='checkmarks'></span>Sandals
        </label>  
        <label className='sidebar-lable-container'>
          <input type="radio" name='test' />
          <span className='checkmarks'></span>Heals
        </label> 
              
      </div>
    </div>
  )
}

export default Category