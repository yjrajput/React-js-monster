import React from 'react'

const ProductList = ({products}) => {
  return (
    <div>
        {
            products.map(({id, name, price}) =>(
                <li key={id}>
                    <h1>Name: {name}</h1>
                    <p>Price: {price}</p>
                </li>
            ))
        }
    </div>
  )
}

export default ProductList