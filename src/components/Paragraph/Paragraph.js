import styled from 'styled-components';
import { media } from 'utils/style-utils';

const Paragraph = styled.p`
  margin-bottom: 1em;
  font-size: 1rem;
  line-height: 1.5;

  ${media.min.desktop`
    font-size: 1.25rem;
  `}
`;

export default Paragraph;
