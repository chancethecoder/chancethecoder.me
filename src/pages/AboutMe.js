import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import {
  Grid,
  H2,
  H3,
  Paragraph,
  Text,
  Section,
} from 'components';

import * as tocActions from 'actions/tocActions';

class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.tableOfContents = [
      { key: 'introduce', name: 'introduce', active: false },
      { key: 'skills', name: 'skills', active: false },
      { key: 'experience', name: 'experience', active: false },
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
          <title>chancethecoder.me</title>
          <meta name="description" content="chancethecoder's website" />
        </Helmet>
        <Grid className="markdown">
          <Section id="introduce" className="markdown">
            <H2 id="introduce">About me</H2>
            <Paragraph>
              I'm a software engineer at an e-commerce company based in Gangnam, South Korea. <br/>
              I have interest in technologies such as <a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>, <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>, <a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer">Elasticsearch</a>. <br/>
              My goal is to be an expert in data ecosystem and to create invisible value through data play.
            </Paragraph>
            <Paragraph>
              Feel free to contact me: <br/>
              <Text copyable>
                <a href="mailto:chancethecoder@gmail.com">chancethecoder@gmail.com</a>
              </Text>
            </Paragraph>
          </Section>
          <Section id="skill" className="markdown">
            <H2 id="skill">Skill</H2>
            <Paragraph>
              <ul>
                <li>
                  Language
                  <ul>
                    <li>Java</li>
                    <li>Scala</li>
                    <li>Python</li>
                    <li>Javascript</li>
                  </ul>
                </li>
                <li>
                  Data Engineering
                  <ul>
                    <li>Spark</li>
                    <li>Hive - MR/Tez</li>
                    <li>HDFS</li>
                    <li>Kafka</li>
                  </ul>
                </li>
                <li>
                  DevOps
                  <ul>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                  </ul>
                </li>
              </ul>
            </Paragraph>
          </Section>          
          <Section id="experience" className="markdown">
            <H2 id="experience">Experience</H2>
            <H3>11Street</H3>
            <Paragraph>
              <Text type="secondary">10/2018 - current</Text>
              <ul>
                <li>
                  Data Ingestion
                  <ul>
                    <li>Ingest Data(server logs, user behavior logs, ...) from Kafka to Hadoop cluster using Kafka Consumer</li>
                  </ul>
                </li>
                <li>
                  Application DevOps
                  <ul>
                    <li>Querying tool like Hue/Zeppelin</li>
                    <li>Hive Metadata showing tool</li>
                  </ul>
                </li>
                <li>
                  Hadoop Cluster Migration
                  <ul>
                    <li>Migrate applications from existing Hadoop cluster to new one</li>
                  </ul>
                </li>
              </ul>
            </Paragraph>
            <H3>Interpark</H3>
            <Paragraph>
              <Text type="secondary">05/2017 - 10/2018</Text>
              <ul>
                <li>Application DevOps
                  <ul>
                    <li>User behavior tracking service like GTM(Google Tag Manager)</li>
                    <li>Statistics visualization service</li>
                  </ul>
                </li>
              </ul>
            </Paragraph>
            <H3>Ajou University</H3>
            <Paragraph>
              <Text type="secondary">03/2011 - 02/2017</Text>
              <ul>
                <li>Bachelor&apos;s degree in Media</li>
              </ul>
            </Paragraph>
          </Section>
        </Grid>
      </Fragment>
    );
  }
}

AboutMe.propTypes = {
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
)(AboutMe);
