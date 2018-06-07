import React from 'react';

const Playground = ({match}) => {
    return (
        <div>
            <h2>Playground {match.params.name}</h2>
        </div>
    );
};

export default Playground;