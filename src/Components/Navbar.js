import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import Cart from './Cart';
import './Navbar.css'

function Navbar() {

  const { cart } = useContext(CartContext);

  return (
    <div className='nav-container'>
        <div className='nav-logo'>E-commerce</div>
        <div className='nav-items'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/cart">Cart <span> { cart.totalItems} </span></Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar