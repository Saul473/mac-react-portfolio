import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import './style.css';

function Footer(props) {
    return (
        <footer id="footer">
            <div id="footer-links">
                <a href={"" + props.github}>
                    <BsGithub size={25} />
                </a>
                <a href={"" + props.webpage}>
                    < BsGlobe2 size={25} />
                </a>
                <a href={"" + props.webpage}>
                    < BsGlobe2 size={25} />
                </a>
                <a href={"" + props.webpage}>
                    < BsGlobe2 size={25} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;