import React from 'react';
import styled from 'styled-components';

import {
  Grid,
  GridItem,
} from 'components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: auto;
  padding: none;
  min-height: 100vh;
`;

const Playground = () => (
  <Wrapper>
    <Grid>
      <GridItem column="1/span 24" align="flex-center">
        Playground!
      </GridItem>
    </Grid>
  </Wrapper>
);

export default Playground;
