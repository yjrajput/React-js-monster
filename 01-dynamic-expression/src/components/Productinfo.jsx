import React from 'react'

const Productinfo = (props) => {
  return (
    <div>
        <h1>Product name: {props.productInfo.name}</h1>
        <p>Product price: {props.productInfo.price}</p>
        <p>Avaliblity: {props.productInfo.avalible}</p>
    </div>
  )
}

export default Productinfo