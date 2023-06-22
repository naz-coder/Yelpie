import React, { useState } from 'react';
import NavBar from '../pageHeader/NavBar';
import "../home/LandingStyle.scss";
import SignUpForm from '../form/signupForm/SignUpForm';

const Landing = ({signOut}) => {
    const [account, setAccount] = useState("");
    const accountHandler = () => {
        setAccount(true);
    }

  return (
    <section className='landing'>
        <div><NavBar signOut={signOut} /></div>
       <div className='landing-content'>
       <h1>WELCOME TO YELPIE HOTELS</h1>
        <p>Where your dreams come true...</p>
        <button onClick={accountHandler} className='create-profile-btn'>Create account</button>
       </div>
       {account && <SignUpForm/>}
    </section>
  )
}

export default Landing