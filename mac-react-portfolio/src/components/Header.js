import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'


function Header() {
    return (
        // <section className='header'>
        //     <nav
        //         className='justify-content-end'
        //         activeKey="./AboutMe"
        //         onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        //         >
        //         <Nav.Item>
        //             <Nav.Link href="./components/AboutMe">About Me</Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link href="./components/Contact">Contact Me</Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link href="./cpmponentsProjects">Portfolio</Nav.Link>
        //         </Nav.Item>
        //     </nav>
        // </section>
        <Nav className="justify-content-end" id='nav' activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Contact Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Portfolio</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default Header;