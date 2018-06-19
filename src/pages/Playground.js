import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from 'components/Flex';

const StyledHeader = styled.h4`
  font-size: 2.5rem;
  font-weight: 600;
`;

const StyledParagraph = styled.section`
  font-size: 1rem;
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
  <Flex valign="center" direction="column">
    <StyledHeader>Playground</StyledHeader>
    <StyledParagraph>
      click the button!
    </StyledParagraph>
    <NavLink exact to={`/playground/${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`} >random</NavLink>
    <Route path={`${match.url}/:topicId`} component={Topic} />
  </Flex>
);

Playground.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Playground;
