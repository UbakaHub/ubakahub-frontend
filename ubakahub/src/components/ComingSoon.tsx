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
      <div className="logo">
        <img src="path-to-your-logo.png" alt="UbakaHub Logo" />
      </div>

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
          />
          <button type="submit">Notify Me</button>
        </form>
      ) : (
        <p>Thanks for signing up! We'll let you know when we launch. 🚀</p>
      )}

      
    </div>
  );
};

export default ComingSoon;
