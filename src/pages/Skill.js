import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

import {
  AnimatedGrid,
  FixedPageNav,
  Flex,
  Grid,
  GridItem,
  H1,
} from 'components';

const StyledParagraph = styled.p`
  margin-bottom: 1em;
  font-size: 1rem;
  line-height: 1.2;

  ${media.min.laptop`
    font-size: 1.25rem;
  `}
`;

const Skill = () => (
  <Fragment>
    <Helmet>
      <title>Skill</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
    <Grid
      padding="0"
      margin="0"
    >
      <AnimatedGrid
        padding="1.5rem"
        margin="1.5rem"
      >
        <GridItem column="1/span 24" row="1">
          <GridItem column="1/span 16">
            <H1 id="language">
              language
            </H1>
          </GridItem>
          <GridItem>
            <StyledParagraph>
              javascript, ruby, python, c, java
            </StyledParagraph>
          </GridItem>
        </GridItem>
      </AnimatedGrid>
      <AnimatedGrid
        padding="1.5rem"
        margin="1.5rem"
      >
        <GridItem column="1/span 24" row="1">
          <GridItem column="1/span 16">
            <H1 id="framework">
              framework
            </H1>
          </GridItem>
          <GridItem>
            <StyledParagraph>
              ruby on rails, node, react, flask, spring
            </StyledParagraph>
          </GridItem>
        </GridItem>
      </AnimatedGrid>
      <AnimatedGrid
        padding="1.5rem"
        margin="1.5rem"
      >
        <GridItem column="1/span 24" row="1">
          <GridItem column="1/span 16">
            <H1 id="devops">
              devops
            </H1>
          </GridItem>
          <GridItem>
            <StyledParagraph>
              aws, jenkins, docker
            </StyledParagraph>
          </GridItem>
        </GridItem>
      </AnimatedGrid>
    </Grid>
    <Flex>
      <FixedPageNav
        items={[
          { key: 'language', href: '#language', name: 'language' },
          { key: 'framework', href: '#framework', name: 'framework' },
          { key: 'devops', href: '#devops', name: 'devops' },
        ]}
      />
    </Flex>
  </Fragment>
);

export default Skill;
