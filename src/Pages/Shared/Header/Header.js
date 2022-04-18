// import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link } from "react-router-dom";
// import auth from "../../../firebase.init";

const Header = () => {
  //   const [user] = useAuthState(auth);

  //   const handleSignOut = () => {
  //     signOut(auth);
  //   };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Dental World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center align-items-center">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="home#services"> My Services</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about">
              About Me
            </Nav.Link>
            {/* {user ? (
              <button
                className="btn btn-link text-white text-decoration-none"
                onClick={handleSignOut}
              >
                sign out
              </button>
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// import React from "react";
// const Header = () => {
//   return (
//     <div>
//       <h2></h2>
//     </div>
//   );
// };
// export default Header;
