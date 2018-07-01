import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import ButtonGroup from 'components/ButtonGroup';
import NavButton from 'components/NavButton';
import ItemsGrid from 'pages/components/ItemsGrid';
import RouteWithLayout from 'layouts/components/RouteWithLayout';
import fakeItems from 'assets/fakeItems';

import {
  ChangeCursor,
  ChangeHeader,
} from 'pages/components/Play';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: auto;
  padding: none;
  min-height: 100vh;
`;

const Floater = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 1000;
`;

const PlayList = () => (
  <ItemsGrid
    items={fakeItems}
  />
);

const Play = props => (
  <div>
    {props.children}
    <Floater>
      <ButtonGroup>
        <NavButton small scaleOnHover exact to="/playground">List</NavButton>
        <NavButton small scaleOnHover outlined exact to="/playground">Prev</NavButton>
        <NavButton small scaleOnHover outlined exact to="/playground">Next</NavButton>
      </ButtonGroup>
    </Floater>
  </div>
);

Play.propTypes = {
  children: PropTypes.node.isRequired,
};

const Playground = ({ match }) => (
  <Wrapper>
    <Grid>
      <GridItem column="1/span 24" align="flex-center">
        <Route exact path={match.url} component={PlayList} />
        <RouteWithLayout path={`${match.url}/changecursor`} layout={Play} component={ChangeCursor} />
        <RouteWithLayout path={`${match.url}/changeheader`} layout={Play} component={ChangeHeader} />
      </GridItem>
    </Grid>
  </Wrapper>
);

Playground.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Playground;
