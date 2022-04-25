import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

function NavBar() {
  const auth = useSelector(state => state.authReducer.auth);
  const dispatch = useDispatch();
  // logout
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Navbar
      bg='light'
      expand='lg'
      style={{ position: "sticky", top: 0, zIndex: 1 }}
    >
      <Container fluid>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link to='/'>Home</Nav.Link>
          </Nav>
          {auth ? (
            <Button variant='outline-primary m-2' onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Link to='/login'>
                <Button variant='outline-primary m-2'>Login</Button>
              </Link>

              <Link to='/register'>
                <Button variant='outline-primary'>Register</Button>
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
