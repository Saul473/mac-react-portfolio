import Card from 'react-bootstrap/Card';

function ProjectCards(props) {
    return (
        <Card style={{ width: '18rem'}} >
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default ProjectCards;