import React from 'react';
import { Container } from 'reactstrap';
import Menu from 'components/Menu';

const Projects = () => {
    return (
        <div className="flex-container-center">
            <Container className="mb-4">
                <h4 className="text-center mb-4">My projects</h4>
            </Container>
            <Menu/>
        </div>
    );
};

export default Projects;
