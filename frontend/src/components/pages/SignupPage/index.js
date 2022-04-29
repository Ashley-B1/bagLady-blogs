import React, { useState } from 'react';
import './SignupPage.css';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import * as sessionActions from '../../../store/session';

const SignupPage = () => {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to='/' />;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(sessionActions.signup({ username, email, password, image }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateFile = e => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div className='signup-page'>
      <span className='register-title'>Sign Up Today</span>
      <form className='register-form' onSubmit={handleSubmit}>
        <ul className='register-errors'>
          {errors.map((err, i) => <li key={i}>{err}</li>)}
        </ul>
        <label>Username</label>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          className='register-input'
          placeholder='Enter your username...'
        />
        <label>Email</label>
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='register-input'
          placeholder='Enter your email...'
        />
        <input
          id='file-input'
          type='file'
          onChange={updateFile}
        />
        <label id='file-label' for='file-input'>
          <i className="file-icon fa-solid fa-file-image"></i>
          Choose a Profile Picture!
        </label>
        <label>Password</label>
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='register-input'
          placeholder='Enter your password...'
        />
        <label>Confirm Password</label>
        <input
          type='password'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          className='register-input'
          placeholder='Confirm your password...'
        />
        <button type='submit' className='register-button'>Register</button>
      </form>
      <button className='rl-button'>
        <Link className='link' to='/login'>Login</Link>
      </button>
    </div>
  );
};

export default SignupPage;
