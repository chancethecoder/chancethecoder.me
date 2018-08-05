import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import {
  Icon,
  Timeline,
  Row,
  Col,
  Divider,
} from 'antd';

import {
  AnimatedGrid,
  DescriptionItem,
  FragmentNav,
  Flex,
  Grid,
  GridItem,
  H1,
  H3,
} from 'components';

const About = () => (
  <Fragment>
    <Helmet>
      <title>About</title>
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
          <H1 id="profile">profile</H1>
          <H3>Personal</H3>
          <Row>
            <Col lg={12} sm={24}>
              <DescriptionItem title="Name" content="Youngkyun Kim / 김영균" />
            </Col>
          </Row>
          <Row>
            <Col lg={12} sm={24}>
              <DescriptionItem title="City" content="Seoul" />
            </Col>
            <Col lg={12} sm={24}>
              <DescriptionItem title="Country" content="South Korea" />
            </Col>
          </Row>
          <Row>
            <Col lg={12} sm={24}>
              <DescriptionItem title="Birth" content="May 16, 1992" />
            </Col>
            <Col lg={12} sm={24}>
              <DescriptionItem title="Sex" content="male" />
            </Col>
          </Row>
          <Row>
            <Col lg={12} sm={24}>
              <DescriptionItem
                title="Handle"
                content="chancethecoder"
              />
            </Col>
            <Col lg={12} sm={24}>
              <DescriptionItem
                title="Website"
                content="https://chancethecoder.me"
              />
            </Col>
          </Row>
          <Divider />
          <H3>Company</H3>
          <Row>
            <Col lg={12} sm={24}>
              <DescriptionItem title="Name" content="Interpark" />
            </Col>
          </Row>
          <Row>
            <Col lg={12} sm={24}>
              <DescriptionItem title="Department" content="Data Platform Research" />
            </Col>
            <Col lg={12} sm={24}>
              <DescriptionItem title="Position" content="Data Engineer / Programmer" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Responsibilities"
                content={
                  <ul>
                    <li>Develop BI(Business Intelligence) tools to provide insight</li>
                    <li>Build/manage data pipeline for Big Data analysis</li>
                  </ul>}
              />
            </Col>
          </Row>
          <Divider />
          <H3>Contacts</H3>
          <Row>
            <Col lg={12} sm={24}>
              <DescriptionItem title="Email" content="chancethecoder@gmail.com" />
            </Col>
            <Col lg={12} sm={24}>
              <DescriptionItem title="Phone" content="+82 10 2836 7558" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Github"
                content="github.com/chancethecoder"
              />
            </Col>
          </Row>
        </GridItem>
      </AnimatedGrid>
      <AnimatedGrid
        padding="1.5rem"
        margin="1.5rem"
      >
        <GridItem column="1/span 24" row="1">
          <H1 id="history">Life history</H1>
          <Timeline mode="alternate">
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
      </AnimatedGrid>
      <AnimatedGrid
        padding="1.5rem"
        margin="1.5rem"
      >
        <GridItem column="1/span 24" row="1">
          <H1 id="interest">Interest</H1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </GridItem>
      </AnimatedGrid>
    </Grid>
    <Flex>
      <FragmentNav
        items={[
          { key: 'profile', href: '#profile', name: 'profile' },
          { key: 'history', href: '#history', name: 'history' },
          { key: 'interest', href: '#interest', name: 'interest' },
        ]}
      />
    </Flex>
  </Fragment>
);

export default About;
