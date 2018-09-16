import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { throttle } from 'lodash';

import {
  List,
  ListItem,
} from 'components';

const Nav = styled.a`
  padding-left: 16px;
  display: block;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => (props.active ? '' : '#314659')};
  width: 110px;
  font-size: 14px;
  border-left: ${props => (props.active ? '1px solid' : '')};
  margin-left: -1px;
`;

class TOC extends Component {
  constructor(props) {
    super(props);

    this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 200));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    // console.log(1);
  }

  render() {
    const items = this.props.toc.contents.map(({ key, name, active }) => (
      <ListItem key={key}>
        <Nav href={`#${key}`} active={active}>
          {name}
        </Nav>
      </ListItem>
    ));

    return (
      <List>
        {items}
      </List>
    );
  }
}

TOC.propTypes = {
  toc: PropTypes.shape({
    contents: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      active: PropTypes.boolean,
    })),
  }).isRequired,
};

const mapStateToProps = state => ({
  toc: state.toc,
});

export default connect(mapStateToProps)(TOC);
