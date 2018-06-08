import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginator = () => {
    return (
        <Pagination size="sm" aria-label="Page navigation">
            <PaginationItem>
                <PaginationLink to="/" tag={Link}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink to="/profile" tag={Link}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink to="/playground" tag={Link}>3</PaginationLink>
            </PaginationItem>
        </Pagination>
    );
};

export default Paginator;
