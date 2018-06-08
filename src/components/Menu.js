import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Menu = () => {
    return (
        <div id="nav-bar">
            <Pagination size="sm" aria-label="Page navigation">
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink to="/" tag={Link}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink to="/profile" tag={Link}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink to="/project" tag={Link}>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink to="/playground" tag={Link}>4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        </div>
    );
};

export default Menu;
