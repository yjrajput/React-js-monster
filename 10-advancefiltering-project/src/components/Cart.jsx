import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsBagHeartFill } from "react-icons/bs";
const Cart = ({img, title, reviews,newPrice,prevPrice}) => {
  return (
    <section className='card'>
          <img className='card-img' src={img} alt="shoe" />

          <div className='card-details'>
            <h3 className='card-title'>{title}</h3>
            <section className='card-review'>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <span className='total-review'>{reviews}</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>${prevPrice}</del> {newPrice}
              </div>

              <div className='bag'>
                <BsBagHeartFill/>
              </div>
            </section>
          </div>
      </section>
  )
}

export default Cart