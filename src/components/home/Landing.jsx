import React from 'react';
import NavBar from '../pageHeader/NavBar';
import "../home/LandingStyle.scss";

const Landing = ({signOut}) => {
  return (
    <section className='landing'>
        <div><NavBar signOut={signOut} /></div>
       <div className='landing-content'>
        <div>
        <h1>WELCOME TO YELPIE HOTELS</h1>
        <p>Where your dreams come true...</p>
        </div>
       </div>
    </section>
  )
}

export default Landing