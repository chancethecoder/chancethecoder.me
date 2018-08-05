import styled from 'styled-components';
import { media } from 'utils/style-utils';

const H1 = styled.h1`
  font-weight: 600;
  font-size: 8vw;
  letter-spacing: -1.4px;
  line-height: 1.1;
  margin-bottom: 0.75em;

  ${media.min.tablet`
    font-size: 3.5vw;
    letter-spacing: -0.02em;
  `}
`;

export default H1;
