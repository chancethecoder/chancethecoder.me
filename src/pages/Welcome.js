import React from 'react';
import styled from 'styled-components';
import { media, appearsOut } from 'utils/style-utils';
import Grid from 'pages/components/Grid';
import GridItem from 'pages/components/GridItem';
import Wrapper from 'pages/components/Wrapper';
import BottomFloater from 'pages/components/BottomFloater';
import PageMover from 'pages/components/PageMover';

const Content = styled.div`
  margin: 5rem auto 0;
`;

const AnimatedGrid = styled(Grid)`
  opacity: 0;
  animation: ${appearsOut} .55s forwards .15s;
`;

const ParagraphWrapper = styled(GridItem)`
  ${media.min.desktop`
    grid-column: 1 / span 14;
  `}

  ${media.min.laptop`
    grid-column: 1 / span 18;
  `}
`;

const StyledHeader = styled.h1`
  font-weight: 700;
  font-size: 13vw;
  letter-spacing: -1.4px;
  line-height: 1.1;
  display: block;
  margin-bottom: 0.2em;

  ${media.min.tablet`
    font-size: 5.5vw;
    letter-spacing: -0.02em;
  `}
`;

const StyledParagraph = styled.p`
  margin-bottom: 1em;
  font-size: 1rem;
  line-height: 1.5;

  ${media.min.laptop`
    font-size: 1.25rem;
    max-width: 40vw;
  `}
`;

const Welcome = () => (
  <Wrapper>
    <Content>
      <AnimatedGrid>
        <GridItem column="1/span 24" align="flex-end">
          <GridItem column="1/span 16">
            <StyledHeader>
              Welcome!
            </StyledHeader>
          </GridItem>
          <ParagraphWrapper>
            <StyledParagraph>
              I am a programmer who can proudly call myself an enthusiast.
              I like climbing, traveling and most of all I want to do my job well.
              If you want to work together, please contact me.
            </StyledParagraph>
          </ParagraphWrapper>
        </GridItem>
      </AnimatedGrid>
    </Content>
    <BottomFloater>
      <PageMover left="/" right="/profile" />
    </BottomFloater>
  </Wrapper>
);

export default Welcome;
