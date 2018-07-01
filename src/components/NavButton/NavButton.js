import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Button from 'components/Button';

class NavButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.props.to} />;
    }

    return <Button {...this.props} onClick={this.handleClick}>{this.props.children}</Button>;
  }
}

NavButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavButton;
