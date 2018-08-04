import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media, appearsOut } from 'utils/style-utils';

import {
  Affix,
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

const Skill = () => (
  <Fragment>
    <Grid
      width="100vw"
      padding="0"
      margin="0"
    >
      <AnimatedGrid>
        <GridItem column="1/span 24" row="1">
          <GridItem column="1/span 16">
            <StyledHeader id="language">
              language
            </StyledHeader>
          </GridItem>
          <ParagraphWrapper>
            <StyledParagraph>
              javascript, ruby, python, c, java
            </StyledParagraph>
          </ParagraphWrapper>
        </GridItem>
      </AnimatedGrid>
      <AnimatedGrid>
        <GridItem column="1/span 24" row="1">
          <GridItem column="1/span 16">
            <StyledHeader id="framework">
              framework
            </StyledHeader>
          </GridItem>
          <ParagraphWrapper>
            <StyledParagraph>
              ruby on rails, node, react, flask, spring
            </StyledParagraph>
          </ParagraphWrapper>
        </GridItem>
      </AnimatedGrid>
      <AnimatedGrid>
        <GridItem column="1/span 24" row="1">
          <GridItem column="1/span 16">
            <StyledHeader id="devops">
              devops
            </StyledHeader>
          </GridItem>
          <ParagraphWrapper>
            <StyledParagraph>
              aws, jenkins, docker
            </StyledParagraph>
          </ParagraphWrapper>
        </GridItem>
      </AnimatedGrid>
    </Grid>
    <Affix offsetTop={10}>
      <SectionList>
        <SectionListItem>
          <SectionNav href="#language">language</SectionNav>
        </SectionListItem>
        <SectionListItem>
          <SectionNav href="#framework">framework</SectionNav>
        </SectionListItem>
        <SectionListItem>
          <SectionNav href="#devops">devops</SectionNav>
        </SectionListItem>
      </SectionList>
    </Affix>
  </Fragment>
);

export default Skill;
