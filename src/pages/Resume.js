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
              I am a data software engineer based in South Korea with 2+ years of experience.
            </Paragraph>
            <Paragraph>
              I'm lazy, but I love challenging tasks in development and hobbies.
            </Paragraph>
            <Paragraph>
              My current goal is to be a data engineer providing reliable data infrastructure and analysis support.
            </Paragraph>
          </Section>
          <Divider />
          <Section id="skill">
            <H2 id="skill">SKILL</H2>
            <H4>Programming Language</H4>
            <Paragraph>
              Ruby, Python, Java, Scala, C, SQL<br />
              Javascript, HTML, CSS<br />
              Rails, Node, React, Lua, Shell
            </Paragraph>
            <H4>Data Engineering</H4>
            <Paragraph>
              HDFS, Spark, Hive, Kafka
            </Paragraph>
            <H4>System Engineering &amp; DevOps</H4>
            <Paragraph>
              Linux, Docker, Jenkins
            </Paragraph>
          </Section>
          <Divider />
          <Section id="experience">
            <H2 id="experience">WORK EXPERIENCE</H2>
            <H3>Data Engineer</H3>
            <H4>11Street</H4>
            <Row>
              <span>10/2018 - current</span>
            </Row>
            <Row>
              <Col lg={24}>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>Support builing Data Infrastructure Cluster</ListItem>
                  <List listStyleType="circle" padding="0 0 0 2rem">
                    <ListItem>
                      Copying an existing data application cluster to a new data center
                    </ListItem>
                  </List>
                </List>
              </Col>
            </Row>
            <H3>Data Engineer</H3>
            <H4>Interpark</H4>
            <Row>
              <span>05/2017 - 10/2018</span>
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
