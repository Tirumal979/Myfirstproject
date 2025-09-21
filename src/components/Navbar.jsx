import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div className= 'Logo'>
        <h3>React Landing Page</h3>
      </div>
      <ul className='menu-list'>
                <li className='menu-link'>
                  <Link to='/'>Home</Link>
                  <Link to='/about'>About</Link>
                  <Link to='/blog'>Blog</Link>
                  <Link to='/contactus'>ContactUs</Link>
                </li>
              </ul>
     
      
    </div>
  )
}

export default Navbar