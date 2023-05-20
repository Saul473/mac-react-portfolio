import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsGithub } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import './portfolio.css'

function ProjectCards(props) {
  return (
  <div className="text-black" id="project-cards">
    <Card style={{ width: '50%' , minheight:'30vh' }} id="card" className="rounded-9">
      <Card.Img variant="top" src={props.image} />
      <Card.Body id="card-body">
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <div className=''>
            {props.description} <br />
            <div id="card-links">
              <a href={"" + props.github}>
                <BsGithub size={40} />
              </a> <span />
              <a href={"" + props.webpage}>
                < BsGlobe2 size={40} />
              </a>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  )
}

export default ProjectCards;