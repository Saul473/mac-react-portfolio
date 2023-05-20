import React from 'react';
import Pdf from './Portfolio/images/Resume.pdf'
import './style.css'

function Resume() {
    return (
        <>
            <h1>
            <a href={Pdf} target='_blank' rel='noreferrer' id="resume-header">Resume</a>
            </h1>
        <div id="resume-page">
            <div id="soft-skills">
                <h3>Soft Skilly</h3>
                <ul id="soft-skills-ul"> 
                    <li>Smart</li>
                    <li>Cool</li>
                    <li>Gamer</li>
                    <li>Financial Guide</li>
                    <li>Credit Specialist</li>
                </ul>
            </div>
            <div id="hard-skills">
                <h3>Hard Skilly</h3>
                <ul id="hard-skills-ul"> 
                    <li>Full stack web dev</li>
                    <li>IT Helpdesk</li>
                    <li>Pro Cook</li>
                    <li>Stylist</li>
                    <li>Home Owner</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Resume;