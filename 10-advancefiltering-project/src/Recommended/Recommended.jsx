import React from 'react'
import './Recommended.css'
import Button from '../components/Button'
const Recommended = () => {
  const buttons = ['All Products', 'Nike', 'Adidas', 'Puma', 'Vans']
  return (
    <section className='recommended'>
      <h2 >Recommended</h2>
      <div className='recommended-btns'>
        {
          buttons.map((items) => (

            <Button key={Math.random()} items={items} />

          ))
        }
      </div>

    </section>
  )
}

export default Recommended