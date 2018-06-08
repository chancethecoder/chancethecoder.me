import React from 'react';
import FlexContainer from 'components/FlexContainer';

const Playground = ({match}) => {
    return (
        <FlexContainer>
            <h4>Playground {match.params.name}</h4>
        </FlexContainer>
    );
};

export default Playground;