import React from 'react'
import { useState } from "react";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Button from 'react-bootstrap/Button';
function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <div style={{marginLeft:"40%",marginTop
    :"2%"}}>
        <h1>GET</h1>
        <h3>Get Everyone Together</h3>
        {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
         
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignupForm onLogin={onLogin} />
          
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </div>
  )
}

export default Login