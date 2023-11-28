import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './forget.css';

function Forget(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // Passwords do not match, perform necessary actions (e.g., display an error message)
      console.log('Passwords do not match');
      return;
    }

    try {
      // Send a request to the backend to update the password
      const response = await axios.post('/reset-password', { email, password });

      if (response.status === 200) {
        // Password changed successfully, perform any necessary actions (e.g., display a success message)
        console.log('Password changed successfully');
        navigate('/signin');
      }
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error changing password:', error);
    }
  };

  const handleDeleteUser = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');

    if (!confirmed) {
      // If not confirmed, return
      return;
    }

    try {
      // Send a request to the backend to delete the user
      const response = await axios.delete('/delete-user', {
        data: { email },
      });

      if (response.status === 200) {
        // User deleted successfully, perform any necessary actions (e.g., display a success message)
        console.log('User deleted successfully');
        navigate('/signin');
      }
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div
      className="main-forget"
      style={{
        background: `url('https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="auth-form-container forget">
        <h1 className="head" style={{ color: 'white', margin: '0 0 15px 20px' }}>
          FORGOT YOUR{' '}
        </h1>

        <h1
          className="head"
          style={{ color: 'white', margin: '0px 0px 10px 305px' }}
        >
          PASSWORD?
          <span
            className="OnePirateTypography-markedH3Center"
            style={{ width: '8.5rem', margin: '0 0 0 300px' }}
          ></span>
        </h1>

        <header className="note">
          Enter your email address below and we'll send you a link to reset
        </header>
        <header className="note">your password.</header>

        <form className="forget-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className="input-forget"
            value={email}
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">New Password</label>
          <input
            className="input-forget"
            value={password}
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="input-forget"
            value={confirmPassword}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="link-btn-forget" type="submit">
            Send Reset Link
          </button>
        </form>

        <form className="delete-form" onSubmit={handleDeleteUser}>
          <label htmlFor="delete-email">Email</label>
          <input
            className="input-forget"
            value={email}
            type="email"
            id="delete-email"
            name="delete-email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="link-btn-forget" type="submit">
            Delete this user
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forget;