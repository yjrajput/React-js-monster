import React from 'react'
import './Sidebar.css'
import { TiShoppingCart } from "react-icons/ti";
import Category from '../Sidebar/Category/Category'
import Colors from '../Sidebar/Colors/Colors'
import Price from '../Sidebar/Price/Price'
const Sidebar = () => {
  return (
    <>
        <section className='sidebar'>
            <div className='logo-container'>
                <TiShoppingCart className='logo'/>
            </div>

            <Category/>
            <Price/>
            <Colors/>

        </section>
    </>
  )
}

export default Sidebar