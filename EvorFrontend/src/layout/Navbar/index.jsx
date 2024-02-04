import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

function Navbar() {
  return (
    <div className='navigation'>
        <div className="navbar">
            <div className="leftNavbar">
                <img className='logo' src="https://evor.az/images/admin_logo.png" alt="" />
            </div>
            <div className="mainNavbar">
                <ul className='pagesNavbar'>
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>About Us</NavLink></li>
                    <li><NavLink>Products</NavLink></li>
                    <li><NavLink>Contact Us</NavLink></li>
                    <li><NavLink>Become a seller</NavLink></li>
                    <li><NavLink>Login</NavLink></li>
                    <li></li>
                </ul>
            </div>
            <div className="rightNavbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-envelope"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar