import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import {
  Row,
  Col,
  Divider,
} from 'antd';

import {
  Grid,
  H2,
  H3,
  H4,
  List,
  ListItem,
  Paragraph,
  Section,
} from 'components';

import * as tocActions from 'actions/tocActions';

class Resume extends Component {
  constructor(props) {
    super(props);

    this.tableOfContents = [
      { key: 'introduce', name: 'introduce', active: false },
      { key: 'skills', name: 'skills', active: false },
      { key: 'experience', name: 'experience', active: false },
      { key: 'education', name: 'education', active: false },
      { key: 'language', name: 'language', active: false },
    ];
  }

  componentDidMount() {
    this.props.actions.tocActions.setContents(this.tableOfContents);
  }

  componentWillUnmount() {
    this.props.actions.tocActions.setContents([]);
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Resume</title>
          <meta name="description" content="chancethecoder's website" />
        </Helmet>
        <Grid
          padding="1.5rem 3rem"
        >
          <Section id="introduce">
            <H2 id="introduce">Youngkyun kim</H2>
            <Paragraph>
              I am software engineer based in South Korea.
              As a data engineer, I have been working for more than a year.
            </Paragraph>
            <Paragraph>
              I am currently interested in the hadoop ecosystem such as kafka, spark, etc.
              but I am also interested in DevOps technologies and development of Front/Back-End.
            </Paragraph>
            <Paragraph>
              I am usually lazy, but I like to challenge development and hobbies.
              I personally think that development experience is important
              in the working environment, and I am looking back at whether
              I am doing something worthwhile, not technically biased development.
            </Paragraph>
          </Section>
          <Divider />
          <Section id="skills">
            <H2 id="skills">SKILLS</H2>
            <H4>Programming</H4>
            <Paragraph>
              Ruby, Python, Java, C, C++, Lua, Openresty, SQL, NoSQL, Shell<br />
              Javascript(ES6+), HTML, CSS, LESS, SASS<br />
              Rails, Node, React, Redux, Styled Component, Electron
            </Paragraph>
            <H4>Data Engineering</H4>
            <Paragraph>
              Kafka, D3
            </Paragraph>
            <H4>DevOps</H4>
            <Paragraph>
              Docker, Jenkins, Git
            </Paragraph>
            <H4>Design</H4>
            <Paragraph>
              Gimp, Photoshop, Illustrator
            </Paragraph>
          </Section>
          <Divider />
          <Section id="experience">
            <H2 id="experience">WORK EXPERIENCE</H2>
            <H3>Data Engineer</H3>
            <H4>Interpark</H4>
            <Row>
              <span>05/2017 - current</span>
            </Row>
            <Row>
              <Col lg={24}>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>Develop user behavior tracking service</ListItem>
                  <List listStyleType="circle" padding="0 0 0 2rem">
                    <ListItem>
                      Tagging based web log collection system
                    </ListItem>
                    <ListItem>
                      Main skill: Openresty, Javascript, AWS, Kafka
                    </ListItem>
                  </List>
                </List>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>Develop statistics inquiry service</ListItem>
                  <List listStyleType="circle" padding="0 0 0 2rem">
                    <ListItem>
                      In house web application providing statistical visualization
                    </ListItem>
                    <ListItem>
                      Main skill: RubyOnRails, D3.js
                    </ListItem>
                  </List>
                </List>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>Develop Data pipeline</ListItem>
                  <List listStyleType="circle" padding="0 0 0 2rem">
                    <ListItem>
                      Serving, receiving data with restful API or other protocol
                    </ListItem>
                    <ListItem>
                      Main skill: Python
                    </ListItem>
                  </List>
                </List>
              </Col>
            </Row>
          </Section>
          <Divider />
          <Section id="education">
            <H2 id="education">EDUCATION</H2>
            <H3>Bachelor&apos;s degree in Media</H3>
            <H4>Ajou University</H4>
            <Row>
              <span>03/2011 - 02/2017</span>
            </Row>
            <Row>
              <span>Suwon, Korea</span>
            </Row>
          </Section>
          <Divider />
          <Section id="language">
            <H2 id="language">LANGUAGE</H2>
            <Row>
              <Col lg={12}>
                <H4>Korean</H4>
                <span>Native</span>
              </Col>
              <Col lg={12}>
                <H4>English</H4>
                <span>Limited</span>
              </Col>
            </Row>
          </Section>
        </Grid>
      </Fragment>
    );
  }
}

Resume.propTypes = {
  actions: PropTypes.shape({
    tocActions: PropTypes.shape({
      setContents: PropTypes.func,
    }).isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    tocTarget: state.tocTarget,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      tocActions: bindActionCreators(tocActions, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Resume);
