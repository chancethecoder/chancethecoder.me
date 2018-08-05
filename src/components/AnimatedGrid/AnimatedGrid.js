import styled from 'styled-components';
import propTypes from 'prop-types';
import { appearsOut } from 'utils/style-utils';

const AnimatedGrid = styled.div`
  display: grid;
  width: ${props => props.width};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  grid-template-rows: ${props => props.gridTemplateRows};
  grid-template-columns: ${props => props.gridTemplateColumns};

  opacity: 0;
  animation: ${appearsOut} .55s forwards .15s;
`;

AnimatedGrid.defaultProps = {
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto',
  padding: '1.5rem',
  margin: 'auto',
};

AnimatedGrid.propTypes = {
  padding: propTypes.string,
  margin: propTypes.string,
  width: propTypes.string,
  gridTemplateColumns: propTypes.string,
  gridTemplateRows: propTypes.string,
};

export default AnimatedGrid;
