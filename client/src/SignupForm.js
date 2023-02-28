import React,{ useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';



function SignupForm({onLogin}) {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
        bio,
      }),
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label >Username</Form.Label>
        <br/>
        <Form.Control  type="text" placeholder=" " value={username}
          onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <br/>
        <Form.Control type="password" placeholder=" " value={password}
          onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password confirmation</Form.Label>
        <br/>
        <Form.Control type="password" placeholder=" " value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Profile image</Form.Label>
        <br/>
        <Form.Control type="text" placeholder=" " value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Bio</Form.Label>
        <br/>
        <Form.Control as="textarea" rows={3} value={bio}
          onChange={(e) => setBio(e.target.value)}/>
      </Form.Group>
      <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      
      {errors&&errors.map((err) => (
          <Toast>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Warning</strong>
            
          </Toast.Header>
          <Toast.Body key={err}>{err}</Toast.Body>
        </Toast>
        ))}
      
    </Form>
  )
}

export default SignupForm