
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import Toast from 'react-bootstrap/Toast';


function LoginForm({onLogin}) {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showA, setShowA] = useState(true);
  

  const toggleShowA = () => {
    setShowA(!showA)
    setUsername("")
    setPassword("")

};
  

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit} style={{width:"400px"}}>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label >Username</Form.Label>
      <br/>
      <Form.Control  type="text" placeholder="Enter username" value={username}
          onChange={(e) => setUsername(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <br/>
      <Form.Control type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Button  color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
        {errors&&errors.map((err) => (
          <Col  className="mb-2">
          
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Warning</strong>
              
            </Toast.Header>
            <Toast.Body key={err}>{err}</Toast.Body>
          </Toast>
        </Col>
        ))}
  </Form>
  )
}

export default LoginForm