import React from 'react'
import './Colors.css'
import Input from '../../components/Input'
const Colors = () => {
  return (
    <div className='color-container'>
      <h2 className='sidebar-title color-title'>Color</h2>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
    </div>
  )
}

export default Colors