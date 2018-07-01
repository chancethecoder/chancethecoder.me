import React from 'react';
import styled from 'styled-components';
import { media, fadeIn } from 'utils/style-utils';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: auto;
  padding: none;
  min-height: 100vh;
`;

const AnimatedGridItem = styled(GridItem)`
  animation: ${fadeIn} .3s;
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
  grid-column: 1 / 15;
  font-size: 5vw;
  grid-row: 1 / 4;
  padding: 3vh 0 1vh;
  line-height: 1.1;
  margin-bottom: 0.5em;

  ${media.max.laptop`
    font-size: 2.25rem;
    padding-top: 0;
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

const Profile = () => (
  <Wrapper>
    <Grid width="100vw">
      <AnimatedGridItem column="1/span 24" align="flex-center">
        <GridItem column="1/span 16">
          <StyledHeader>
            Chance-the-coder
          </StyledHeader>
        </GridItem>
        <ParagraphWrapper>
          <StyledParagraph>
            I am a programmer who can proudly call myself an enthusiast.
            I like climbing, traveling and most of all I want to do my job well.
            If you want to work together, please contact me.
          </StyledParagraph>
        </ParagraphWrapper>
      </AnimatedGridItem>
    </Grid>
  </Wrapper>
);

export default Profile;
