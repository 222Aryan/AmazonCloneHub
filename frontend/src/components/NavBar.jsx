import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'

const NavBar = () => {
  return (
    <div className="Navbar">
        <div className="Navbar__logo">
          <img src= "resources\amazon_logo.png" alt="amazon_logo"/>
        </div>
        <div className="Navbar__options">
          <a href="/">Home</a>
          <a href="/orders">Orders</a>
          <a href="/customercare">CustomerCare</a>
          <a href="/cart">Cart </a>
        </div>
    </div>
  )
}

export default NavBar