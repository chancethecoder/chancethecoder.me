import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import {
  AnimatedGrid,
  Flex,
  FragmentNav,
  Grid,
  GridItem,
  H1,
  Paragraph,
} from 'components';

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
            <Paragraph>
              javascript, ruby, python, c, java
            </Paragraph>
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
            <Paragraph>
              ruby on rails, node, react, flask, spring
            </Paragraph>
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
            <Paragraph>
              aws, jenkins, docker
            </Paragraph>
          </GridItem>
        </GridItem>
      </AnimatedGrid>
    </Grid>
    <Flex>
      <FragmentNav
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
