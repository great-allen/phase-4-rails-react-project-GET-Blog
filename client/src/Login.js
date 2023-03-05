import React from 'react'
import { useState } from "react";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Button from 'react-bootstrap/Button';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <div style={{display:"flex",flexDirection: 'column',justifyContent:"center",alignItems:"center",height:"100vh",marginTop:"-90px"}}>
        <h1>GET</h1>
        <h3>Get Everyone Together</h3>
        {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
         
          <p style={{textAlign:"left"}}>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignupForm onLogin={onLogin} />
          
          <p style={{textAlign: "left"}}>
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