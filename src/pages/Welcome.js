import React from 'react';
import { Container } from 'reactstrap';
import Menu from 'components/Menu';

const Welcome = () => {
    return (
        <div className="flex-container-center">
            <Container>
                <h4 className="text-center mb-4">Welcome!</h4>
                <p className="text-center">
                    I am a programmer who can proudly call myself an enthusiast.<br />
                    I like climbing, traveling and most of all I want to do my job well.<br />
                    If you want to work together, please contact me.
                </p>
            </Container>
            <Menu/>
        </div>
    );
};

export default Welcome;
