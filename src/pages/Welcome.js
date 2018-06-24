import React from 'react';
import styled from 'styled-components';
import { media, appearsOut } from 'utils/style-utils';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: auto;
  padding: none;

  min-height: 100vh;
`;

const Content = styled.div`
  margin: 5rem auto 0;
`;

const Grid = styled.div`
  display: grid;
  width: 100vw;
  margin: auto;
  padding: 1.5rem;
  grid-template-columns: repeat(24, 1fr);

  ${media.laptop`
    align-items: center;
    overflow-x: hidden;
    padding: 8vh 8vw 8vh;
  `}

  opacity: 0;
  animation: ${appearsOut} .55s forwards .15s;
`;

const GridItem = styled.div`
  grid-column: ${props => (props.column ? props.column : 1)};
  grid-row: ${props => (props.row ? props.row : 1)};
  align-self: ${props => (props.align ? props.align : 'auto')};
`;

const ParagraphWrapper = styled(GridItem)`
  ${media.desktop`
    grid-column: 1 / span 14;
  `}

  ${media.laptop`
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

  ${media.tablet`
    font-size: 5.5vw;
    letter-spacing: -0.02em;
  `}
`;

const StyledParagraph = styled.p`
  margin-bottom: 1em;
  font-size: 1rem;
  line-height: 1.5;

  ${media.laptop`
    font-size: 1.25rem;
    max-width: 40vw;
  `}
`;

const Welcome = () => (
  <Wrapper>
    <Content>
      <Grid>
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
      </Grid>
    </Content>
  </Wrapper>
);

export default Welcome;
