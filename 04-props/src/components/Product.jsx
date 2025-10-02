import React from 'react'

const Product = ({product}) => {
  return (
    <div>
        <h2>Product name: {product.name}</h2>
        <p>Product price: ${product.price}</p>
    </div>
  )
}

export default Product