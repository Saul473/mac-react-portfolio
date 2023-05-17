import Card from 'react-bootstrap/Card';

function ProjectCards(props) {
    return (
        <Card>
            <Card.Img src={props.image} alt={props.name}></Card.Img> 
            <Card.ImgOverlay className='d-flex justify-content-center align-items-center flex-column'>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default ProjectCards;