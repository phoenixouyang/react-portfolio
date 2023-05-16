import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import "../../styles/contact.css"

export default function Contact() {

  // create state variables, and set their values to empty strings
  const [email, setEmail] = useState('Email address');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    // get value of input that was changed
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // set state of email, name or message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Clear success message if user is submitting mutiple forms
    setSuccessMessage('');

    // validation for empty fields and valid email, and output error messages
    if (!name) {
      setErrorMessage('Please enter a name');
      return;
    }
    if (!message) {
      setErrorMessage('Please enter a message');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // set input back to blank once form is sucessfully submitted, and output success message
    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('');
    setSuccessMessage('Your form has been submitted sucessfully!')
  };

  return (
    <div className="page-container">
      <h1 className="contact-title">Contact Me</h1>
      <form className="contact-form">
        <div className="name-email">
          <div className="input name-input">
            <input value={name} type="text" id="name" name="name" onChange={handleInputChange} placeholder="Name" className="form-field"></input>
          </div>
          <div className="input email-input">
            <input value={email} type="email" id="email" name="email" onChange={handleInputChange} placeholder="Email Address" className="form-field"></input>
          </div>
          </div>
        <div className="input message-input">
          <textarea value={message} id="message" name="message" rows="5" cols="50" onChange={handleInputChange} placeholder="Message"></textarea>
        </div>
        <button type="button" id="submit-btn" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-message">{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div>
          <p className="success-message">{successMessage}</p>
        </div>
      )}
    </div>
  );
}
