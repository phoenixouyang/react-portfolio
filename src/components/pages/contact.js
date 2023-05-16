import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

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

    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('');
    setSuccessMessage('Your form has been submitted sucessfully!')
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form className="contact-form">
        <div className="input name-input">
          <label for="name">Name:</label>
          <input value={name} type="text" id="name" name="name" onChange={handleInputChange}></input>
        </div>
        <div className="input email-input">
          <label for="email">Email Address:</label>
          <input value={email} type="email" id="email" name="email" onChange={handleInputChange}></input>
        </div>
        <div className="input message-input">
          <label for="message">Message:</label>
          <textarea value={message} id="message" name="message" rows="10" cols="50" onChange={handleInputChange}></textarea>
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
