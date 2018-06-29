import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { media, appearsOut } from 'utils/style-utils';
import Grid from 'pages/components/Grid';
import GridItem from 'pages/components/GridItem';
import Wrapper from 'pages/components/Wrapper';

const Padder = styled.div`
  margin: 5rem auto 0;
`;

const AnimatedGrid = styled(Grid)`
  width: 100vw;
  opacity: 0;
  animation: ${appearsOut} .55s forwards .15s;
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
  margin-bottom: 0.2em;

  ${media.min.tablet`
    font-size: 5.5vw;
    letter-spacing: -0.02em;
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

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  color: ${props => (props.outlined ? props.background : props.color)};
  background: ${props => (props.outlined ? props.color : props.background)};
  font-weight: bold;
  font-size: 20px;
  padding: 16px 64px;
  margin-bottom: 24px;
  margin-right: 16px;
  border-radius: 2px;
  cursor: pointer;
  transition: transform .25s ease;
  border: ${props => (props.outlined ? `1.5px solid ${props.background}` : 'none')};
`;

StyledNavLink.defaultProps = {
  background: '#ff5a5f',
  color: '#FFF',
  outlined: false,
};

StyledNavLink.propTypes = {
  background: propTypes.string,
  color: propTypes.string,
  outlined: propTypes.boolean,
};

const Welcome = () => (
  <Wrapper>
    <Padder>
      <AnimatedGrid>
        <GridItem column="1/span 24" align="flex-end">
          <GridItem column="1/span 16">
            <StyledHeader>
              Welcome!
            </StyledHeader>
          </GridItem>
          <ParagraphWrapper>
            <StyledParagraph>
              A collection of my experiments, inspirations, stories.<br />
              Let&apos;s code just for fun developers!
            </StyledParagraph>
          </ParagraphWrapper>
          <br />
          <StyledNavLink exact to="/playground">
            Explore
          </StyledNavLink>
          <StyledNavLink exact to="/profile" outlined>
            It&apos;s me
          </StyledNavLink>
        </GridItem>
      </AnimatedGrid>
    </Padder>
  </Wrapper>
);

export default Welcome;
