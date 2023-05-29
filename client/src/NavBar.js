import React from 'react';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';
import FaceIcon from '@mui/icons-material/Face';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function NavBar({ user, setUser,searchTerm,setSearchTerm }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        localStorage.clear();
        setUser(null)
        window.location.href = "/";
      }
    });
  }
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const searchComponent = isHomePage ? (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
    </Search>
  ) : null;

  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{color:"#FA7921"}}>Welcome to GET community</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px',marginLeft:"10%" }}
            navbarScroll
          >
            <Nav.Link href="/" >Feeds</Nav.Link>
            <Nav.Link href="/My">My posts</Nav.Link>
            <Nav.Link href="/New">New post</Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
        
        <Navbar.Collapse className="justify-content-end">
        
          <Navbar.Text style={{marginRight:5}}>
          
            Signed in as: 
          </Navbar.Text>
          {user.url?<Avatar alt={user.username} src={user.url} />:<Avatar><FaceIcon/></Avatar>}
          <NavDropdown title={user.username} id="basic-nav-dropdown" style={{marginRight:"14px",marginLeft:5}}>
              <NavDropdown.Item href="/MyProfile" >My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/Logout" onClick={handleLogoutClick}>Logout</NavDropdown.Item>
              </NavDropdown>
         
        </Navbar.Collapse>
        {searchComponent}
      </Container>
      
    </Navbar>
   
    </div>
  );
}



export default NavBar;
