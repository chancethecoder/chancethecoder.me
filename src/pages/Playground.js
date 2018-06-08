import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const Playground = ({match}) => {
    return (
        <div className="d-flex flex-column">
            <Container>
                <h4>Playground {match.params.name}</h4>
            </Container>
            <Link to="/" tag={Link}>Home</Link>
        </div>
    );
};

export default Playground;