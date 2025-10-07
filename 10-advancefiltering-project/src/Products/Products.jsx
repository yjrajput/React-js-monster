import React from 'react'
import './Products.css'
import { AiFillStar } from "react-icons/ai";
import { BsBagHeartFill } from "react-icons/bs";
const Products = () => {
  return (
    <section className='card-container'>
      <section className='card'>
          <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />

          <div className='card-details'>
            <h3 className='card-title'>Shoe</h3>
            <section className='card-review'>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <span className='total-review'>5</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>$300</del> 200
              </div>

              <div className='bag'>
                <BsBagHeartFill/>
              </div>
            </section>
          </div>
      </section>

      <section className='card'>
          <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />

          <div className='card-details'>
            <h3 className='card-title'>Shoe</h3>
            <section className='card-review'>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <span className='total-review'>5</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>$300</del> 200
              </div>

              <div className='bag'>
                <BsBagHeartFill/>
              </div>
            </section>
          </div>
      </section>

      <section className='card'>
          <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />

          <div className='card-details'>
            <h3 className='card-title'>Shoe</h3>
            <section className='card-review'>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <span className='total-review'>5</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>$300</del> 200
              </div>

              <div className='bag'>
                <BsBagHeartFill/>
              </div>
            </section>
          </div>
      </section>

      <section className='card'>
          <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />

          <div className='card-details'>
            <h3 className='card-title'>Shoe</h3>
            <section className='card-review'>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <span className='total-review'>5</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>$300</del> 200
              </div>

              <div className='bag'>
                <BsBagHeartFill/>
              </div>
            </section>
          </div>
      </section>

      <section className='card'>
          <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />

          <div className='card-details'>
            <h3 className='card-title'>Shoe</h3>
            <section className='card-review'>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <span className='total-review'>5</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>$300</del> 200
              </div>

              <div className='bag'>
                <BsBagHeartFill/>
              </div>
            </section>
          </div>
      </section>
    </section>
  )
}

export default Products