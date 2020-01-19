import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const BaseFooter = () => (
  <StyledFooter>
    &copy; 2020 by Youngkyun Kim
  </StyledFooter>
);

export default BaseFooter;
