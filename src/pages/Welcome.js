import React from 'react';
import styled from 'styled-components';
import { media, appearsOut } from 'utils/style-utils';

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: auto;
  padding: none;

  min-height: 100vh;
`;

const StyledContentDiv = styled.div`
  margin: 5rem auto 0;
`;

const StyledGrid = styled.div`
  display: grid;
  width: 100vw;
  margin: auto;
  grid-template-columns: repeat(24, 1fr);

  ${media.giant`
    align-items: center;
    overflow-x: hidden;
    padding: 8vh 8vw 8vh;
  `}

  opacity: 0;
  animation: ${appearsOut} .55s forwards .15s;
`;

const StyledGridInner = styled.div`
  grid-column: 1 / span 24;
  align-self: flex-end;
`;

const StyledHeaderDiv = styled.div`
  grid-column: 1 / span 16;
  grid-row: 1;
`;

const StyledParagraphDiv = styled.div`
  ${media.giant`
    grid-column: 1 / span 14;
  `}

  ${media.tablet`
    grid-column: 1 / span 18;
  `}
`;

const StyledHeader = styled.h1`
  font-size: 5.5vw;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  display: block;
  margin-bottom: 0.2em;
`;

const StyledParagraph = styled.p`
  margin-bottom: 1em;
  font-size: 1.75rem;
  line-height: 1.5;

  ${media.tablet`
    font-size: 1.25rem;
    max-width: 30vw;
  `}
`;

const Welcome = () => (
  <StyledWrapper>
    <StyledContentDiv>
      <StyledGrid>
        <StyledGridInner>
          <StyledHeaderDiv>
            <StyledHeader>
              Welcome!
            </StyledHeader>
          </StyledHeaderDiv>
          <StyledParagraphDiv>
            <StyledParagraph>
              I am a programmer who can proudly call myself an enthusiast.<br />
              I like climbing, traveling and most of all I want to do my job well.<br />
              If you want to work together, please contact me.
            </StyledParagraph>
          </StyledParagraphDiv>
        </StyledGridInner>
      </StyledGrid>
    </StyledContentDiv>
  </StyledWrapper>
);

export default Welcome;
