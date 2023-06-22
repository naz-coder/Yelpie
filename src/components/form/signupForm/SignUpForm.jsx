import React from "react";
import "./SignUpFormStyle.scss";

const SignUpForm = () => {
  
  const formSubmithandler = (e) => {
    e.preventDefault();

  };

  return (
    <section className="signup-section">
    <h1>Create <span>Restaurant</span>!</h1>
      <form className="contact-form" onSubmit={formSubmithandler}>
        <div>
          <label htmlFor="name">Restaurant Name:</label>
          <input id="name" name="name" 
          placeholder="SweetPot Kitchen" 
            datatype="text"
            // onChange={nameChangeHandler}
            // value={nameValue}
            required
            />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input id="location" name="location" 
          placeholder="Nonso Oloye Str, Nyanya - Abuja" 
            datatype="email"
            // onChange={emailChangeHandler}
            // value={emailValue}
            required
            />
        </div>
        <div>
          <label htmlFor="connect">Phone Contact:</label>
          <input id="connect" name="connect" 
          placeholder="+234 1230 0000 00" 
            datatype="phone"
            // onChange={connectChangeHandler}
            // value={connectValue}
            required
            />
        </div>
        <div>
          <label htmlFor="message">Description:</label>
          <textarea maxLength={500} 
          id="message"
          name="message"
          placeholder="Tell us some more about your restaurant" 
          datatype="text"
          // onChange={messageChangeHandler}
          // value={messageValue}
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Create Account</button>
        <div className="copy-container">
      <p><a target="blank" href="https://nazanajemba.vercel.app/" className="copy">&copy; Naz-codes {new Date().getFullYear()}</a></p>
      </div>

      </form>
    </section>
  );
};


export default SignUpForm