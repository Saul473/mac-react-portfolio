import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'
import { BsGithub } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <div className=''>
            {props.description} <br />
            <div>
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
  )
}

export default ProjectCards;