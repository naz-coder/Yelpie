import React from 'react'
import "../pageHeader/NavBar.scss"
import {Link} from 'react-router-dom';
import Logo from "../../assets/Logo.png"

const NavBar = (signOut) => {
    const signOutHandler = () => {
        signOut.signOut();
    };

  return (
        <header>
            <div  className='nav-section'>
            <div className='home-menu-item'><Link to={"/"}  className='home-menu'>Home</Link></div>
        <div>
            <img src={Logo} alt='Logo' className='logo'/>
            </div>
            <div>
            <button className='logout-btn' onClick={signOutHandler}>Sign out</button>
            </div>
            </div>

        </header>
  )
}

export default NavBar