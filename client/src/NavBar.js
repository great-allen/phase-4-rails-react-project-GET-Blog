import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

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
            <Nav.Link href="/New">New post</Nav.Link>
            {/* <Nav.Link href="/Logout" onClick={handleLogoutClick}>Logout</Nav.Link> */}
          </Nav>
          
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        {/* <Nav.Link href="/Logout" onClick={handleLogoutClick} style={{marginRight:"5px"}}>Logout</Nav.Link> */}
          <Navbar.Text>
            Signed in as: 
          </Navbar.Text>
          <NavDropdown title={user.username} id="basic-nav-dropdown" style={{marginRight:"14px"}}>
              <NavDropdown.Item href="/Logout" onClick={handleLogoutClick}>Logout</NavDropdown.Item>
              </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
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
