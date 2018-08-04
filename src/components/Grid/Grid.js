import styled from 'styled-components';
import propTypes from 'prop-types';

const Grid = styled.div`
  display: grid;
  width: ${props => props.width};
  margin: ${props => props.padding};
  padding: ${props => props.padding};
  grid-template-rows: ${props => props.gridTemplateRows};
  grid-template-columns: ${props => props.gridTemplateColumns};
`;

Grid.defaultProps = {
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto',
  padding: '1.5rem',
  margin: 'auto',
  width: 'auto',
};

Grid.propTypes = {
  padding: propTypes.string,
  margin: propTypes.string,
  width: propTypes.string,
  gridTemplateColumns: propTypes.string,
  gridTemplateRows: propTypes.string,
};

export default Grid;
