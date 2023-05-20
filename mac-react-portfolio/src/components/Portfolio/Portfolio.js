import React from 'react';
import ProjectCards from './ProjectCards';
import myProjects from './project_data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Portfolio() {
    return (
        <Container>
            <h1 className='text-center'>
               My Portfolio
            </h1>
            < br />
            <Row className='flex-wrap justify-content-center'>
            {myProjects.map((project, index) => (
                <ProjectCards 
                    key={index}
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    github={project.github}
                    webpage={project.webpage}
                />
            ))}
            </Row>
        </Container>
    )
}

export default Portfolio;