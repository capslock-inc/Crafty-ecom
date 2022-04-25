import React from 'react'
import './Navbar.css'
import search from './search.png'
import cart from './cart.png'


export default function Navbar() {
  return (
    <header className='header '>

        <nav className="navbar">

            <div className="left">
                <h3>Crafty</h3>
            </div>

            <div className="right">
                <ul className="navlist">
                    <li>Home</li>
                    <li>Offers</li>
                    <li>About</li>
                    <li><img src={search} alt="search" />
                    <span className="formobile">Search</span>
                    </li>
                    <li><img src={cart} alt="cart" />
                    <span className="formobile">Cart</span></li>
                </ul>
            </div>

        </nav>
        

    </header>
  )
}