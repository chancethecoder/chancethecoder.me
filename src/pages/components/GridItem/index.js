import styled from 'styled-components';

const GridItem = styled.div`
  grid-column: ${props => (props.column ? props.column : 1)};
  grid-row: ${props => (props.row ? props.row : 1)};
  align-self: ${props => (props.align ? props.align : 'auto')};
`;

export default GridItem;
