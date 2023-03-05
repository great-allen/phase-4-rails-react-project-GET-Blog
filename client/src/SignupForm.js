import React,{ useState} from 'react'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Toast from 'react-bootstrap/Toast';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


function SignupForm({onLogin}) {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
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
  };
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setErrors([]);
  //   setIsLoading(true);
  //   fetch("/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //       password_confirmation: passwordConfirmation,
  //       image_url: imageUrl,
  //       bio,
  //     }),
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
    // <Form onSubmit={handleSubmit} style={{width:"400px"}}> 
    //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
    //     <Form.Label >Username</Form.Label>
    //     <br/>
    //     <Form.Control  type="text" placeholder=" " value={username}
    //       onChange={(e) => setUsername(e.target.value)}/>
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //     <Form.Label>Password</Form.Label>
    //     <br/>
    //     <Form.Control type="password" placeholder=" " value={password}
    //       onChange={(e) => setPassword(e.target.value)} />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //     <Form.Label>Password confirmation</Form.Label>
    //     <br/>
    //     <Form.Control type="password" placeholder=" " value={passwordConfirmation}
    //       onChange={(e) => setPasswordConfirmation(e.target.value)} />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //     <Form.Label>Profile image</Form.Label>
    //     <br/>
    //     <Form.Control type="text" placeholder=" " value={imageUrl}
    //       onChange={(e) => setImageUrl(e.target.value)}/>
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    //     <Form.Label>Bio</Form.Label>
    //     <br/>
    //     <Form.Control as="textarea" rows={3} value={bio}
    //       onChange={(e) => setBio(e.target.value)}/>
    //   </Form.Group>
    //   <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      
    //   {errors&&errors.map((err) => (
    //       <Toast>
    //       <Toast.Header>
    //         <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    //         <strong className="me-auto">Warning</strong>
            
    //       </Toast.Header>
    //       <Toast.Body key={err}>{err}</Toast.Body>
    //     </Toast>
    //     ))}
      
    // </Form>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          {/* <Typography component="h1" variant="h5">
            Sign up
          </Typography> */}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  // autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  autoFocus
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  // autoComplete="new-password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password confirmation"
                  label="Password confirmation"
                  type="password"
                  id="password"
                  // autoComplete="password-confirmation"
                  value={passwordConfirmation}
                  onChange={(e)=>setPasswordConfirmation(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="profile image"
                  label="profile image"
                  type="text"
                  id="profile-image"
                  // autoComplete="profile-image"
                  value={imageUrl}
                  onChange={(e)=>setImageUrl(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="bio"
                  label="personal bio"
                  type="text"
                  id="bio"
                  // autoComplete="bio"
                  value={bio}
                  onChange={(e)=>setBio(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  )
}

export default SignupForm