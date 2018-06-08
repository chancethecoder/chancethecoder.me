import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const Playground = ({match}) => {
    return (
        <div className="flex-container">
            <Container>
                <h4>Playground {match.params.name}</h4>
                <ul>
                    { [...Array(10).keys()].map(e => <li>{e}</li>) }
                </ul>
            </Container>
            <Link to="/" tag={Link}>Home</Link>
        </div>
    );
};

export default Playground;