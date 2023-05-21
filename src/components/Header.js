import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio/Portfolio';
// import Contact from './components/Contact';
import './style.css'

function Header({ currentPage, handlePageChange }) {

  // const [currentPage, setCurrentPage] = useState('AboutMe');

  // const renderPage = () => {
  //   if(currentPage === 'AboutMe') {
  //     return <AboutMe />
  //   }
  //   if(currentPage === 'Contact') {
  //     return <Contact />
  //   }
  //   if(currentPage === 'Portfolio') {
  //     return <Portfolio />
  //   }
  //   if(currentPage === 'Resume') {
  //     return <Resume />
  //   }
  // }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Saul Navarro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

          <a href="#aboutme" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
          <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
          <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
          <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
          {/* <Nav.Link href="/mac-react-portfolio/contact">Contact Me</Nav.Link>
          <Nav.Link href="/mac-react-portfolio/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/mac-react-portfolio/resume">Resume</Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;