import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  <div>
    <h4>Playground</h4>

    <p>
      click the button!
    </p>

    <NavLink exact to={`/playground/${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`} >random</NavLink>

    <Route path={`${match.url}/:topicId`} component={Topic} />
  </div>
);

Playground.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Playground;
