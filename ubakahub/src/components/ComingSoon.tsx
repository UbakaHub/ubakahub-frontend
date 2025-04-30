// src/components/ComingSoon.tsx
import React, { useState } from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email) {
      // Ideally, send email to your backend or an email marketing service here
      console.log("Email submitted: ", email);
      setSubmitted(true);
    }
  };

  return (
    <div className="coming-soon-container">

      <h1>UbakaHub is coming!</h1>
      <p>Be the first to know when we launch. Enter your email below!</p>

      {/* Email form */}
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Leave your email..."
            value={email}
            onChange={handleEmailChange}
            required
            className='email-input'
          />
          <button type="submit" className='email-submit'>
            <i className='bx bx-right-arrow-alt'></i>
          </button>
        </form> 
      ) : (
        <>
        <h1>Thank you</h1>
        <p>Your email has been successfully added.</p></>
      )}
      <p className='footer-disclaimer'>By submitting your email, you agree to receive updates, new and promotions. Check out our <a href="#">privacy policy</a>.</p>
      
    </div>
  );
};

export default ComingSoon;
