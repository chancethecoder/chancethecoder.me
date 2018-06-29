import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from 'pages/components/Grid';
import GridItem from 'pages/components/GridItem';
import ItemsGrid from 'pages/components/ItemsGrid';
import Wrapper from 'pages/components/Wrapper';
import BottomFloater from 'pages/components/BottomFloater';
import PageMover from 'pages/components/PageMover';
import fakeItems from 'assets/fakeItems';

import {
  ChangeCursor,
  ChangeHeader,
} from 'pages/components/Play';

const PlayList = () => (
  <ItemsGrid
    items={fakeItems}
  />
);

const Playground = ({ match }) => (
  <Wrapper>
    <Grid>
      <GridItem column="1/span 24" align="flex-center">
        <Route exact path={match.url} component={PlayList} />
        <Route path={`${match.url}/changecursor`} component={ChangeCursor} />
        <Route path={`${match.url}/changeheader`} component={ChangeHeader} />
      </GridItem>
    </Grid>
    <BottomFloater>
      <PageMover left="/playground" right={`/playground/${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`} />
    </BottomFloater>
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
