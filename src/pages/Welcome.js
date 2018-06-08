import React from 'react';
import MainContainer from 'components/MainContainer';

const Welcome = () => {
    return (
        <MainContainer>
            <h4 className="text-center mt-5 mb-4">Welcome!</h4>
            <p className="text-center">
                I am a programmer who can proudly call myself an enthusiast.<br />
                I like climbing, traveling and most of all I want to do my job well.<br />
                If you want to work together, please contact me.
            </p>
        </MainContainer>
    );
};

export default Welcome;
