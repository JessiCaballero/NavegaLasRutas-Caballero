import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'
import { link } from 'react-router-dom'

const NavBar= () => {
  return (
    <div className='navbar'>
     <h2>logo</h2>
     <ul>
      <link to={'/categoria/remeras'}>Remeras</link>
      <link to={'/categoria/accesorios'}>Accesorios</link>
      <link to={'/categoria/camperas'}>RCamperas</link>
     </ul>   
     <CartWidget />
    </div>
  )
}

export default NavBar