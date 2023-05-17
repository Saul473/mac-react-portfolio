import React from 'react';
import ProjectCards from './ProjectCards';
import project_data from './project_data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Portfolio() {
    return (
        <Container>
            <h1 className='text-center'>
               My Portfolio
            </h1>
            <Row className='flex-wrap justify-content-center'>
                {project_data.map((project, idx) => (
                    <ProjectCards>
                        key={idx}
                        name={project.name}
                        img={project.image}
                        description={project.description}
                        github_repo={project.github_repo}
                        webpage={project.webpage}
                    </ProjectCards>
                ))}
            </Row>
        </Container>
    )
}

export default Portfolio;