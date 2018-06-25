import styled from 'styled-components';
import { media } from 'utils/style-utils';

const Grid = styled.div`
  display: grid;
  width: 100vw;
  margin: auto;
  padding: 1.5rem;
  grid-template-columns: repeat(24, 1fr);

  ${media.min.laptop`
    align-items: center;
    overflow-x: hidden;
    padding: 8vh 8vw 8vh;
  `}
`;

export default Grid;
