import React from 'react'
import './Colors.css'
import Input from '../../components/Input'
const Colors = () => {
  const colors = ['All', 'Red', 'Blue', 'Black', 'Green', 'White']
  return (
    <div className='color-container'>
      <h2 className='sidebar-title color-title'>Color</h2>
      {
        colors.map((color) =>(
          <Input key={color} items = {color}/>
        ))
      }
    </div>
  )
}

export default Colors