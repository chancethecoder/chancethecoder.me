import React from 'react';
import styled from 'styled-components';
import { media, appearsOut } from 'utils/style-utils';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import ButtonGroup from 'components/ButtonGroup';
import NavButton from 'components/NavButton';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: auto;
  padding: none;
  min-height: 100vh;
`;

const Padder = styled.div`
  margin: 5rem auto 0;
`;

const AnimatedGrid = styled(Grid)`
  width: 100vw;
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
    <Padder>
      <AnimatedGrid>
        <GridItem column="1/span 24" align="flex-end">
          <GridItem column="1/span 16">
            <StyledHeader>
              Welcome!
            </StyledHeader>
          </GridItem>
          <ParagraphWrapper>
            <StyledParagraph>
              A collection of my experiments, inspirations, stories.<br />
              Let&apos;s code just for fun developers!
            </StyledParagraph>
          </ParagraphWrapper>
          <br />
          <ButtonGroup>
            <NavButton large bold scaleOnHover exact to="/playground">
              Explore
            </NavButton>
            <NavButton large bold scaleOnHover outlined exact to="/profile">
              It&apos;s me
            </NavButton>
          </ButtonGroup>
        </GridItem>
      </AnimatedGrid>
    </Padder>
  </Wrapper>
);

export default Welcome;
