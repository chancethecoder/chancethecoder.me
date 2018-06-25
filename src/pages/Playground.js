import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media, fadeIn } from 'utils/style-utils';
import Grid from 'pages/components/Grid';
import GridItem from 'pages/components/GridItem';
import Wrapper from 'pages/components/Wrapper';
import BottomFloater from 'pages/components/BottomFloater';
import PageMover from 'pages/components/PageMover';

const AnimatedGridItem = styled(GridItem)`
  animation: ${fadeIn} .3s;
`;

const ParagraphWrapper = styled(GridItem)`
  ${media.min.desktop`
    grid-column: 1 / span 14;
  `}

  ${media.min.laptop`
    grid-column: 1 / span 18;
  `}
`;

const StyledHeader = styled.h4`
  grid-column: 1 / 15;
  font-size: 2rem;
  grid-row: 1 / 4;
  padding: 3vh 0 1vh;
  line-height: 1.1;
  margin-bottom: 0.5em;
`;

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

Topic.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const Playground = ({ match }) => (
  <Wrapper>
    <Grid>
      <AnimatedGridItem column="1/span 24" align="flex-center">
        <ParagraphWrapper>
          <Route path={`${match.url}/:topicId`} component={Topic} />
        </ParagraphWrapper>
      </AnimatedGridItem>
    </Grid>
    <BottomFloater>
      <PageMover left="/profile" right={`/playground/${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`} />
      <StyledHeader>
        Playground
      </StyledHeader>
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
