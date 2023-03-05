
import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';

// import Toast from 'react-bootstrap/Toast';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


function LoginForm({onLogin}) {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [showA, setShowA] = useState(true);
  

//   const toggleShowA = () => {
//     setShowA(!showA)
//     setUsername("")
//     setPassword("")

// };
  
const handleSubmit = (event) => {
  event.preventDefault();
  // const data = new FormData(event.currentTarget);
  // console.log({
  //   email: data.get('email'),
  //   password: data.get('password'),
  // });
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
        r.json().then((err) => alert(err.errors));
      }
    });
};


  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   }).then((r) => {
  //     setIsLoading(false);
  //     if (r.ok) {
  //       r.json().then((user) => onLogin(user));
  //     } else {
  //       r.json().then((err) => setErrors(err.errors));
  //     }
  //   });
  // }

  return (
  //   <Form onSubmit={handleSubmit} style={{width:"400px"}}>
  //   <Form.Group className="mb-3" controlId="formGroupEmail" >
  //     <Form.Label >Username</Form.Label>
  //     <br/>
  //     <Form.Control  type="text" placeholder="Enter username" value={username}
  //         onChange={(e) => setUsername(e.target.value)}/>
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="formGroupPassword">
  //     <Form.Label>Password</Form.Label>
  //     <br/>
  //     <Form.Control type="password" placeholder="Password" value={password}
  //         onChange={(e) => setPassword(e.target.value)}/>
  //   </Form.Group>
  //   <Button  color="primary" type="submit">
  //         {isLoading ? "Loading..." : "Login"}
  //       </Button>
  //       {errors&&errors.map((err) => (
  //         <Col  className="mb-2">
          
  //         <Toast show={showA} onClose={toggleShowA}>
  //           <Toast.Header>
  //             <img
  //               src="holder.js/20x20?text=%20"
  //               className="rounded me-2"
  //               alt=""
  //             />
  //             <strong className="me-auto">Warning</strong>
              
  //           </Toast.Header>
  //           <Toast.Body key={err}>{err}</Toast.Body>
  //         </Toast>
  //       </Col>
  //       ))}
  // </Form>
  <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          {/* <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              name="username"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  autoFocus
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  )
}

export default LoginForm