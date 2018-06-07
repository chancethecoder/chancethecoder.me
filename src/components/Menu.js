import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Menu = () => {
    return (
        <div>
            <Nav>
                <NavItem>
                    <NavLink to="/" tag={Link}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/playground" tag={Link}>Playground</NavLink>
                </NavItem>
            </Nav>
            <hr />
        </div>
    );
};

export default Menu;