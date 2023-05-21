import React from 'react';
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import './style.css';

function Footer() {
    return (
        <footer id="footer">
            <div id="footer-links">
                <a href="https://github.com/Saul473">
                    <BsGithub size={25} />
                </a>
                <a href="https://twitter.com/comingsoon">
                    < BsTwitter size={25} />
                </a>
                <a href="https://instagram.com/comingsoon">
                    < BsInstagram size={25} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;