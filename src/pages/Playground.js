import React from 'react';
import FlexContainer from 'components/FlexContainer';
import Paginator from 'components/Paginator';

const Playground = ({match}) => {
    return (
        <FlexContainer
            width={75}
            height={75}
            direction="column"
            items={{ nextItem: <FlexContainer align="end" items={{ nextItem: <Paginator/> }} /> }}
        >
            <h4>Playground {match.params.name}</h4>
        </FlexContainer>
    );
};

export default Playground;