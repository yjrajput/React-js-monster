import React from 'react'
import './Price.css'
import Input from '../../components/Input'
const Price = () => {
  const price = ['50', '50-100', '100-150', '150-200']
  return (
    <div className='ml'>
        <h2 className='sidebar-title price-title'>Price</h2>
        {
          price.map((items) =>(
            <Input key={items} items={`$${items}`}/>
          ))
        }
        
    </div>
  )
}

export default Price