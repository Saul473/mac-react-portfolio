// import React from 'react';
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'


// function Header() {
//     return (
//       <Navbar>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <Nav.Link href="/aboutme">Saul Navarro</Nav.Link>
//           </Navbar.Brand>
//         </Navbar.Header>
//         <Nav className="justify-content-end" id='nav' activeKey="/aboutme">
//         <Nav.Item>
//           <Nav.Link href="/aboutme">About Me</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/contact">Contact Me</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/portfolio">Portfolio</Nav.Link>
//         </Nav.Item>
//       </Nav>
//       </Navbar>
//     )
// }

// export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;