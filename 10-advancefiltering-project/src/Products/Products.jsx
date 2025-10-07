import React from 'react'
import './Products.css'
import { AiFillStar } from "react-icons/ai";
import { BsBagHeartFill } from "react-icons/bs";
import Cart from '../components/Cart';
const Products = () => {
  return (
    <section className='card-container'>
      <Cart/>
    </section>
  )
}

export default Products