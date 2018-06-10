import React from 'react';
import FlexContainer from 'components/FlexContainer';
import Paginator from 'components/Paginator';

const Welcome = () => {
    return (
        <FlexContainer
            width={50}
            height={50}
            direction="column"
            justify="between"
            align="center"
            items={{ nextItem: <Paginator/> }}
        >
            <h4 className="text-center mt-5 mb-4">Welcome!</h4>
            <p className="text-center">
                I am a programmer who can proudly call myself an enthusiast.<br />
                I like climbing, traveling and most of all I want to do my job well.<br />
                If you want to work together, please contact me.
            </p>
        </FlexContainer>
    );
};

export default Welcome;
