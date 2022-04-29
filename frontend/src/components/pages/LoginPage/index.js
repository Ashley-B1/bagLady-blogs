import React, { useState } from 'react';
import './LoginPage.css';

import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as sessionActions from '../../../store/session';

const LoginPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to='/' />
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);

    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className='login-page'>
      <span className='login-title'>Login</span>
      <form className='login-form' onSubmit={handleSubmit}>
        <ul className='login-errors'>
          {errors.map((err, i) => <li key={i}>{err}</li>)}
        </ul>
        <label>Email or Username</label>
        <input
          required
          onChange={e => setCredential(e.target.value)}
          type='text'
          className='login-input'
          placeholder='Enter Email or Username...'
        />
        <label>Password</label>
        <input
          type='password'
          className='login-input'
          placeholder='Enter your password...'
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
        />
        <button className='login-button'>Login</button>
      </form>
      <button className='lr-button'>
        <Link className='link' to='/signup'>
          Sign Up
        </Link>
      </button>
    </div>
  );
};

export default LoginPage;
