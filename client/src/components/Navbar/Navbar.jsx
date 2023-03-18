import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className='nav-container'>
            <ul>
                <li><Link className='nav-item' to='/'>Home</Link></li>
                <li><Link className='nav-item' to='/about'>About</Link></li>
                <li><Link className='nav-item' to='/recommend'>Recommend</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar