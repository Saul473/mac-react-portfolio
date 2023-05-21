import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'

function Navi() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/mac-react-portfolio/aboutme">Saul Navarro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/mac-react-portfolio/aboutme">About Me</Nav.Link>
          <Nav.Link href="/mac-react-portfolio/contact">Contact Me</Nav.Link>
          <Nav.Link href="/mac-react-portfolio/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/mac-react-portfolio/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;