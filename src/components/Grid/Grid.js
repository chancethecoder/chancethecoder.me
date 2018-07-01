import styled from 'styled-components';
import propTypes from 'prop-types';
import { media } from 'utils/style-utils';

const Grid = styled.div`
  display: grid;
  width: ${props => props.width};
  margin: auto;
  padding: 1.5rem;
  grid-template-columns: ${props => props.gridTemplateColumns};

  ${media.min.laptop`
    align-items: center;
    overflow-x: hidden;
    padding: 8vh 8vw 8vh;
  `}
`;

Grid.defaultProps = {
  gridTemplateColumns: 'repeat(24, 1fr)',
  width: 'auto',
};

Grid.propTypes = {
  gridTemplateColumns: propTypes.string,
  width: propTypes.string,
};

export default Grid;
