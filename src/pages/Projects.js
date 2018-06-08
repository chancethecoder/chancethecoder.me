import React from 'react';
import FlexContainer from 'components/FlexContainer';

const Projects = () => {
    return (
        <FlexContainer direction="column" justify="between" align="center" paginator>
            <h4 className="text-center mb-4">My projects</h4>
        </FlexContainer>
    );
};

export default Projects;
