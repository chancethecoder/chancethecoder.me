import React from 'react';
import styled from 'styled-components';

const Flex = styled(({ type, children, ...props }) => React.createElement(type, props, children))`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  flex-grow: ${props => (props.grow ? props.grow : 0)};
  flex-shrink: ${props => (props.shrink ? props.shrink : 1)};
  flex-basis: ${props => (props.basis ? props.basis : 'auto')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'flex-start')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
`;

Flex.defaultProps = {
  type: 'div',
};

export default Flex;
