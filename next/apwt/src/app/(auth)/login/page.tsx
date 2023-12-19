'use client'

import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

export default function LoginForm () {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!email || !password) {
      setError('Email and password are required');
    }else if (!isValidEmail(email)) {
      setError('Invalid email address');
    } else {
      const res = await login();
      if(res != undefined) {
        if(res.data.message == 'success') {
          router.push('./'+email);
        }
      }
    }
 
};

 async function login() {
   try {
      const response = await axios.post('http://localhost:3000/login',
        {
          username : email,
          password : password
        });
      return response;

    }catch (error) {
        console.error(error);
        setError('user not found');
    }
  }
  
  const isValidEmail = (email) => {
      const emailPattern = /^\S+@\S+\.\S+$/;
        return emailPattern.test(email);
  };

  return (
      <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={handleChangeEmail} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChangePassword} />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </>
  );
};
    
