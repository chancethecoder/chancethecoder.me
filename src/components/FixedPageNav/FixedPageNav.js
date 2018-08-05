import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Affix,
} from 'antd';

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
  color: #314659;
  width: 110px;
  font-size: 14px;
  border-left: 1px solid transparent;
  margin-left: -1px;
`;

const FixedPageNav = ({ offsetTop, items }) => (
  <Affix offsetTop={offsetTop}>
    <List>
      {
        items.map(e => <ListItem key={e.key}><Nav href={e.href}>{e.name}</Nav></ListItem>)
      }
    </List>
  </Affix>
);

FixedPageNav.defaultProps = {
  offsetTop: 10,
};

FixedPageNav.propTypes = {
  offsetTop: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    href: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default FixedPageNav;
