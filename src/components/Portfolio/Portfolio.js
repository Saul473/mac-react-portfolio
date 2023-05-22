import React from 'react';
import ProjectCards from './ProjectCards';
import myProjects from './project_data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Portfolio() {
    return (
        <Container id="portfolio-container">
            <h1 className='text-center' id="portfolio-title">
                My Portfolio
            </h1>
            < br />
            <Row className=''>
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