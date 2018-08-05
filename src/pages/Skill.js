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
          <H1 id="language">language</H1>
          <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </GridItem>
      </AnimatedGrid>
      <AnimatedGrid
        padding="1.5rem"
        margin="1.5rem"
      >
        <GridItem column="1/span 24" row="1">
          <H1 id="framework">framework</H1>
          <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </GridItem>
      </AnimatedGrid>
      <AnimatedGrid
        padding="1.5rem"
        margin="1.5rem"
      >
        <GridItem column="1/span 24" row="1">
          <H1 id="devops">devops</H1>
          <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
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
