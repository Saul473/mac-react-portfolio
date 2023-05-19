import React from 'react';
import Nav from 'react-bootstrap/Nav'


function Header() {
    return (
        <Nav className="justify-content-end" id='nav' activeKey="/aboutme">
        <Nav.Item>
          <Nav.Link href="/aboutme">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default Header;