import React from 'react';
import styled from 'styled-components';

const Flex = styled(({ type, children, ...props }) => React.createElement(type, props, children))`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  flex-basis: ${props => props.basis};
  justify-content: ${props => (props.direction === 'row' ? props.halign : props.valign)};
  align-items: ${props => (props.direction === 'row' ? props.valign : props.halign)};
`;

Flex.defaultProps = {
  direction: 'row',
  basis: 'auto',
  grow: 0,
  halign: 'flex-start',
  shrink: 1,
  type: 'div',
  valign: 'flex-start',
};

export default Flex;
