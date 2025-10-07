import React from 'react'
import './Category.css'
import Input from '../../components/Input'
const Category = () => {
  const category = ['All', 'Nike', 'Adidas', 'Puma', 'Vans']
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>

      <div className='sidebar-items'>
        {
          category.map((items) => (
            <Input key={items} items = {items}/>
          ))
        }  
      </div>
    </div>
  )
}

export default Category