import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import {
  Divider,
  Icon,
  Timeline,
} from 'antd';

import {
  Grid,
  H2,
  Paragraph,
  Section,
} from 'components';

const Welcome = () => (
  <Fragment>
    <Helmet>
      <title>About</title>
      <meta name="description" content="chancethecoder's website" />
    </Helmet>
    <Grid>
      <Section id="introduce">
        <H2 id="introduce">Youngkyun kim</H2>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </Paragraph>
      </Section>
      <Divider />
      <Section id="history">
        <H2 id="timeline">LIFE TIMELINE</H2>
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
      </Section>
    </Grid>
  </Fragment>
);

export default Welcome;
