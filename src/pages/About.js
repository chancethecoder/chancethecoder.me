import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media, appearsOut } from 'utils/style-utils';

import {
  Affix,
  Timeline,
} from 'antd';

import {
  Grid,
  GridItem,
} from 'components';

const AnimatedGrid = styled(Grid)`
  opacity: 0;
  animation: ${appearsOut} .55s forwards .15s;
  min-height: 60vh;
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
  margin-bottom: 0.75em;

  ${media.min.tablet`
    font-size: 5.5vw;
    letter-spacing: -0.02em;
  `}
`;

const StyledParagraph = styled.p`
  margin-bottom: 1em;
  font-size: 1rem;
  line-height: 1.2;

  ${media.min.laptop`
    font-size: 1.25rem;
  `}
`;

const SectionList = styled.ul`
  padding-left: 0;
  list-style: none;
  font-size: 12px;
  margin: 16px 0;
  border-left: 1px solid #ebedf0;
`;

const SectionListItem = styled.ul`
  padding-left: 0;
  list-style: none;
  line-height: 1.5;
  
  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

const SectionNav = styled.a`
  padding-left: 16px;
  display: block;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #314659;
  width: 110px;
  font-size: 14px;
  border-left: 1px solid transparent;
  margin-left: -1px;
`;

const About = () => (
  <Fragment>
    <Grid
      width="100vw"
      padding="0"
      margin="0"
    >
      <AnimatedGrid>
        <GridItem column="1/span 24" row="1">
          <GridItem column="1/span 16">
            <StyledHeader id="chancethecoder">
            chancethecoder
            </StyledHeader>
          </GridItem>
          <ParagraphWrapper>
            <StyledParagraph>
            is my handle.
            </StyledParagraph>
            <StyledParagraph>
            It does not mean anything, it just comes from the name of some rapper.
            </StyledParagraph>
          </ParagraphWrapper>
        </GridItem>
      </AnimatedGrid>
      <AnimatedGrid>
        <GridItem column="1/span 24" row="1">
          <GridItem column="1/span 16">
            <StyledHeader id="life-history">
            Life history
            </StyledHeader>
          </GridItem>
          <ParagraphWrapper>
            <Timeline>
              <Timeline.Item>Born in Seung-nam, South Korea 1992-05</Timeline.Item>
              <Timeline.Item>Studied Media department in Ajou Univ. 2011-03</Timeline.Item>
              <Timeline.Item>Serve military service 2013-01</Timeline.Item>
              <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
          </ParagraphWrapper>
        </GridItem>
      </AnimatedGrid>
    </Grid>
    <Affix offsetTop={10}>
      <SectionList>
        <SectionListItem>
          <SectionNav href="#chancethecoder">chancethecoder</SectionNav>
        </SectionListItem>
        <SectionListItem>
          <SectionNav href="#life-history">Life history</SectionNav>
        </SectionListItem>
        <SectionListItem>
          <SectionNav href="#etc">etc</SectionNav>
        </SectionListItem>
      </SectionList>
    </Affix>
  </Fragment>
);

export default About;
