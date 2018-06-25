import React from 'react';
import styled from 'styled-components';
import { media, fadeIn } from 'utils/style-utils';
import Grid from 'pages/components/Grid';
import GridItem from 'pages/components/GridItem';
import Wrapper from 'pages/components/Wrapper';
import BottomFloater from 'pages/components/BottomFloater';
import PageMover from 'pages/components/PageMover';

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
    <Grid>
      <AnimatedGridItem column="1/span 24" align="flex-center">
        <GridItem column="1/span 16">
          <StyledHeader>
            Introducing Myself: Chancethecoder
          </StyledHeader>
        </GridItem>
        <ParagraphWrapper>
          <StyledParagraph>
            Hello~
          </StyledParagraph>
        </ParagraphWrapper>
      </AnimatedGridItem>
    </Grid>
    <BottomFloater>
      <PageMover left="/" right="/playground" />
    </BottomFloater>
  </Wrapper>
);

export default Profile;
