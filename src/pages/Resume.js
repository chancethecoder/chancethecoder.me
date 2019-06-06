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
            <H2 id="introduce">INTRODUCE</H2>
            <Paragraph>
              Hi, my name is Youngkyun Kim.
            </Paragraph>
            <Paragraph>
              I am a software engineer based in South Korea with 2+ years of experience.
            </Paragraph>
            <Paragraph>
              My goal is to be an expert in creating a trusted data platform and creating invisible value through data play.
            </Paragraph>
          </Section>
          <Divider />
          <Section id="skill">
            <H2 id="skill">SKILL</H2>
            <H4>Programming Language</H4>
            <Row>
              <Col lg={24}>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>Java</ListItem>
                  <ListItem>Scala</ListItem>
                  <ListItem>Python</ListItem>
                  <ListItem>Ruby</ListItem>
                  <ListItem>Javascript</ListItem>
                </List>
              </Col>
            </Row>
            <H4>Data Processing &amp; Pipelining</H4>
            <Row>
              <Col lg={24}>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>Spark</ListItem>
                  <ListItem>Oozie</ListItem>
                  <ListItem>Airflow</ListItem>
                </List>
              </Col>
            </Row>
            <H4>Data Lake Operation</H4>
            <Row>
              <Col lg={24}>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>HDFS</ListItem>
                  <ListItem>Kafka</ListItem>
                </List>
              </Col>
            </Row>
            <H4>Container</H4>
            <Row>
              <Col lg={24}>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>Docker</ListItem>
                  <ListItem>Kubernetes</ListItem>
                </List>
              </Col>
            </Row>
          </Section>
          <Divider />
          <Section id="experience">
            <H2 id="experience">EXPERIENCE</H2>
            <H3>11Street</H3>
            <Row>
              <span>10/2018 - current</span>
            </Row>
            <Row>
              <Col lg={24}>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>Data Cluster Migration</ListItem>
                  <List listStyleType="circle" padding="0 0 0 2rem">
                    <ListItem>
                      Moving softwares running on HDFS clusters to the new datacenter
                    </ListItem>
                    <ListItem>
                      Moving data pipelines running on HDFS clusters to the new datacenter
                    </ListItem>
                  </List>
                </List>
              </Col>
            </Row>
            <H3>Interpark</H3>
            <Row>
              <span>05/2017 - 10/2018</span>
            </Row>
            <Row>
              <Col lg={24}>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>user behavior tracking service</ListItem>
                  <List listStyleType="circle" padding="0 0 0 2rem">
                    <ListItem>
                      Tagging based web log collection system such as GTM
                    </ListItem>
                    <ListItem>
                      Main skill: Openresty, Javascript, AWS ECS
                    </ListItem>
                  </List>
                </List>
                <List listStyleType="circle" padding="0 0 0 1rem">
                  <ListItem>statistics visualization service</ListItem>
                  <List listStyleType="circle" padding="0 0 0 2rem">
                    <ListItem>
                      In-house web application providing statistical visualization
                    </ListItem>
                    <ListItem>
                      Main skill: RubyOnRails, D3.js
                    </ListItem>
                  </List>
                </List>
              </Col>
            </Row>
          </Section>
          <Divider />
          <Section id="education">
            <H2 id="education">EDUCATION</H2>
            <H3>Ajou University</H3>
            <H4>Bachelor&apos;s degree in Media</H4>
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
