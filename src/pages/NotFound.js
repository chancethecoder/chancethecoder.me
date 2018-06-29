import React from 'react';
import styled from 'styled-components';
import { media, fadeIn } from 'utils/style-utils';
import Grid from 'pages/components/Grid';
import GridItem from 'pages/components/GridItem';
import Wrapper from 'pages/components/Wrapper';

const AnimatedGrid = styled(Grid)`
  animation: ${fadeIn} .3s;
  align: flex-center;
`;

const StyledGridItem = styled(GridItem)`
  grid-column: 1 / span 18;

  ${media.min.desktop`
    grid-column: 1 / span 10;
  `}

  ${media.min.laptop`
    grid-column: 1 / span 14;
  `}
`;

const StyledHeader = styled.h4`
  font-weight: 600;
  font-size: 5vw;

  ${media.max.desktop`
    font-size: 3vw;
  `}

  ${media.max.laptop`
    font-size: 2rem;
  `}
`;

const StyledParagraph = styled.section`
  font-size: 1rem;
`;

const NotFound = () => (
  <Wrapper>
    <AnimatedGrid>
      <StyledGridItem>
        <StyledHeader>404 page not found</StyledHeader>
        <StyledParagraph>
          I&apos;m sorry but the page you are looking for does not exist.
        </StyledParagraph>
      </StyledGridItem>
    </AnimatedGrid>
  </Wrapper>
);

export default NotFound;
