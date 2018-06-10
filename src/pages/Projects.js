import React from 'react';
import FlexContainer from 'components/FlexContainer';
import Paginator from 'components/Paginator';

const Projects = () => {
    return (
        <FlexContainer
            width={50}
            height={50}
            direction="column"
            justify="between"
            align="center"
            items={{ nextItem: <Paginator/> }}
        >
            <h4 className="text-center mb-4">My projects</h4>
        </FlexContainer>
    );
};

export default Projects;
