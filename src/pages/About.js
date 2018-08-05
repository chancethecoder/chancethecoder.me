import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

import {
  Icon,
  Timeline,
} from 'antd';

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

const About = () => (
  <Fragment>
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
            <H1 id="handle">
              chancethecoder
            </H1>
          </GridItem>
          <GridItem>
            <StyledParagraph>
              is my handle.
            </StyledParagraph>
            <StyledParagraph>
              It does not mean anything, it just comes from the name of some rapper.
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
            <H1 id="history">
              Life history
            </H1>
          </GridItem>
          <GridItem>
            <Timeline>
              <Timeline.Item>
                <h4>2017-05 ~</h4>
                <p>Working from Interpark as Data engineer</p>
              </Timeline.Item>
              <Timeline.Item>
                <h4>2017-02</h4>
                <p>University graduation</p>
              </Timeline.Item>
              <Timeline.Item>
                <h4>2016-02</h4>
                <p>Web/Android development part-time job in Moeunnet</p>
              </Timeline.Item>
              <Timeline.Item>
                <h4>2013-01</h4>
                <p>Served military service</p>
              </Timeline.Item>
              <Timeline.Item>
                <h4>2011-03</h4>
                <p>Majored in Media Department at Ajou university</p>
              </Timeline.Item>
              <Timeline.Item
                dot={<Icon type="heart-o" style={{ fontSize: '0.75rem' }} />}
                color="red"
              >
                <h4>1992-05</h4>
                <p>Born in Seoung-nam, South Korea</p>
              </Timeline.Item>
            </Timeline>
          </GridItem>
        </GridItem>
      </AnimatedGrid>
      <AnimatedGrid
        padding="1.5rem"
        margin="1.5rem"
      >
        <GridItem column="1/span 24" row="1">
          <GridItem column="1/span 16">
            <H1 id="interest">
              Interest &amp; Favorite
            </H1>
          </GridItem>
          <GridItem>
            hobby here
          </GridItem>
        </GridItem>
      </AnimatedGrid>
    </Grid>
    <Flex>
      <FixedPageNav
        items={[
          { key: 'handle', href: '#handle', name: 'handle' },
          { key: 'history', href: '#history', name: 'history' },
          { key: 'interest', href: '#interest', name: 'interest' },
        ]}
      />
    </Flex>
  </Fragment>
);

export default About;
