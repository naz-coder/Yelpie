import React from "react";
import "./LoginFormStyle.scss";
import { Link } from "react-router-dom";
import useInputs from "../../../customHooks/useInputs";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes('@');

const LoginForm = () => {
  // Form validation with custom hooks
  const {
    value: nameValue, isValid: nameIsValid, hasError: nameHasError, valueChangeHandler: nameChangeHandler, valueBlurHandler: nameBlurHandler, reset: nameReset
  } = useInputs(isNotEmpty);
  const {
    value: emailValue, isValid: emailIsValid, hasError: emailHasError, valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, reset: emailReset,
  } = useInputs(isEmail);
  const {
    value: connectValue, isValid: connectIsValid, hasError: connectHasError, valueChangeHandler: connectChangeHandler, valueBlurHandler: connectBlurHandler, reset: connectReset,
  } = useInputs(isNotEmpty);
  const {
    value: messageValue, isValid: messageIsValid, hasError: messageHasError, valueChangeHandler: messageChangeHandler, valueBlurHandler: messageBlurHandler, reset: messageReset,
  } = useInputs(isNotEmpty);

  // Form state jsx style classes
  const nameClasses = nameHasError ? "user-contact-detail invalid" : "user-contact-detail";
  const passwordClasses = emailHasError ? "user-client-contact-detail invalid" : "user-client-contact-detail";
  // const connectClasses = connectHasError ? "client-contact-detail invalid" : "client-contact-detail";
  // const messageClasses = messageHasError ? "message-detail invalid" : "message-detail";

  // Form validation logic
  let formIsValid = false;
  if (nameIsValid && emailIsValid && connectIsValid && messageIsValid) {
    formIsValid = true;
  };

  const server = `${process.env.REACT_APP_URL}`;
  const formSubmithandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`${server}send`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        mails: {
        nameValue,
        emailValue,
        connectValue,
        messageValue
        }
      }),
    }).then((res) => res.json()).then(async (res) => {
      const resData = await res;
      if (resData.status === "success") {
        alert("Message Sent");
        nameReset();
        emailReset();
        connectReset();
        messageReset();
      } else if (resData.status === "fail") {
        alert("Message failed to send");
      }
    });

    if (!formIsValid) {
      return;
    }  
  };

  return (
    <section>
    <h1>Welcome back <span>Yelpians</span>!</h1>
      <form className="contact-form" onSubmit={formSubmithandler}>
        <div className={nameClasses}>
          <label htmlFor="name">Full Name:</label>
          <input id="name" name="name" 
          placeholder="Naza Anajemba-Agada" 
            datatype="text"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
            />
            {nameHasError && <p className="error-msg">Please enter a name</p>}
        </div>
        <div className={passwordClasses}>
          <label htmlFor="email">Password:</label>
          <input id="email" name="email" 
          placeholder="password" 
            datatype="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
            />
            {emailHasError && <p className="error-msg">Please enter your password</p>}
            <p className="password-reset">Forgot password?</p>
        </div>
        <button disabled={!formIsValid} type="submit" className="submit-btn">Login</button>
      </form>
     <div className="login">
        <p>New? <Link to={"/"} className="acct-login">Create account</Link></p>
        </div>
    </section>
  );
};


export default LoginForm