import React from 'react';
import { Container } from 'reactstrap';
import Paginator from 'components/Paginator';

const MainContainer = (props) => {
    return (
        <div className="w-50 h-50 d-flex flex-column justify-content-between align-items-center">
            <Container>
                {props.children}
            </Container>
            <Paginator/>
        </div>
    );
};

export default MainContainer;
