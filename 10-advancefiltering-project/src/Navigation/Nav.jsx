import React from 'react'
import './Nav.css'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" placeholder='Search your shoe here' className='search-input' />
      </div>

      <div className='profile-container'>
        <a href="#">
          <FaHeart/>
          <FaShoppingCart/>
          <FaRegCircleUser/>
        </a>
      </div>
    </nav>
  )
}

export default Nav