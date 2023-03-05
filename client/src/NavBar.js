import React from 'react';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';

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
        setUser(null);
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
        {/* <Navbar bg="light" expand="lg">
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
       
          <Navbar.Text>
            Signed in as: 
          </Navbar.Text>
          <NavDropdown title={user.username} id="basic-nav-dropdown" style={{marginRight:"14px"}}>
              <NavDropdown.Item href="/Logout" onClick={handleLogoutClick}>Logout</NavDropdown.Item>
              </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
             <Navbar  expand="lg">
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
       
          <Navbar.Text>
            Signed in as: 
          </Navbar.Text>
          <NavDropdown title={user.username} id="basic-nav-dropdown" style={{marginRight:"14px"}}>
              <NavDropdown.Item href="/Logout" onClick={handleLogoutClick}>Logout</NavDropdown.Item>
              </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          {searchComponent}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

// const Wrapper = styled.header`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 8px;
// `;

// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 0;
//   line-height: 1;

//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 4px;
//   position: absolute;
//   right: 8px;
// `;

export default NavBar;
