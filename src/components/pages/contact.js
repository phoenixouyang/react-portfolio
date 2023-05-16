import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
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

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }
    if (!name) {
      setErrorMessage('Please enter a name');
      return;
    }
    if (!message) {
      setErrorMessage('Please enter a message');
      return;
    }

    setEmail('');
    setName('');
    setMessage('');

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.onsubmit({

    })


  }

  return (
    <div>
      <h1>Contact Me</h1>
      <form className="contact-form">
        <div className="input name-input">
          <label for="name">Name:</label>
          <input type="name" id="name" name="name"></input>
        </div>
        <div className="input email-input">
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email"></input>
        </div>
        <div className="input message-input">
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="30" cols="50"></textarea>
        </div>
        <button type="submit" id="submit-btn">Submit</button>
      </form>
    </div>
  );
}
