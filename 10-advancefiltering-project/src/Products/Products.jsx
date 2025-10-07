import React from 'react'
import './Products.css'
import Cart from '../components/Cart'
import products from '../db/data'

const Products = ({ query }) => {
  const filterData = products.filter((product) => {
   return product.title.toLowerCase().includes(query) ||
          product.company.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.newPrice.includes(query)
  })

  return (
    <section className='card-container'>
      
      {filterData.length > 0 ? (
        filterData.map(({img, title, reviews, newPrice, prevPrice }) => (
        <Cart
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      ) 
      
      )) : <p className="no-results">No products found</p>}
    </section>
  )
}

export default Products
