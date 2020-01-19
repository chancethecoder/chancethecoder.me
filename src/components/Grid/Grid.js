import styled from 'styled-components';
import propTypes from 'prop-types';

const Grid = styled.div`
  display: grid;
  margin: ${props => props.margin};
  grid-template-rows: ${props => props.gridTemplateRows};
  grid-template-columns: ${props => props.gridTemplateColumns};
`;

Grid.defaultProps = {
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto',
  margin: 'auto',
};

Grid.propTypes = {
  padding: propTypes.string,
  margin: propTypes.string,
  width: propTypes.string,
  gridTemplateColumns: propTypes.string,
  gridTemplateRows: propTypes.string,
};

export default Grid;
