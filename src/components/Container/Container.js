import styled from 'styled-components';
import media from 'utils/style-utils';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  ${media.tablet`padding: 0 10px;`}
  ${media.phone`padding: 0 5px;`}
`;

export default Container;
