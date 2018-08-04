import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

import {
  HomeButton,
} from 'components';

const Wrapper = styled.div`
  background: #fff;
  display: flex;
  padding: 1.5rem 2.5rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px #f0f1f2;

  ${media.max.laptop`
    padding: 1.5rem;
  `}

  ${media.max.phone`
    flex-direction: column;
  `}
`;

const Top = () => (
  <Wrapper>
    <HomeButton />
  </Wrapper>
);

export default Top;
