import React from 'react'
import './Header.css'
import Logo from '../../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
        {/* logo */}
        <img src={Logo} alt="Fitness Club Logo" className='logo' />

        {/* navigation links */}
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why Us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>

    </div>
  )
}

export default Header