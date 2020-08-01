import React from 'react';
import { Anchor, Tag, Typography } from 'antd';
import {
  SmileTwoTone,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Link } = Anchor;
const { Text } = Typography;

const AboutMe = () => (
  <div style={{
    display: "flex",
  }}>
    <div className="markdown">
      <section id="introduce" className="markdown">
        <h2>About me</h2>
        <p>
          I'm a software engineer at an e-commerce company based in Gangnam, South Korea. <br/>
          I have interest in technologies such as Kubernetes, Kafka, Spark. <br/>
        </p>
        <p>
          Feel free to contact me <SmileTwoTone /><br/>
          <Tag icon={<GithubOutlined />} color="#211F1F">
            <a href="https://github.com/chancethecoder" target="_blank" rel="noopener noreferrer">Github</a>
          </Tag>
          <Tag icon={<LinkedinOutlined />} color="#55acee">
            <a href="https://www.linkedin.com/in/youngkyun-kim/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Tag>
          <Tag icon={<InstagramOutlined />} color="#E1306C">
            <a href="https://www.instagram.com/__youngkyun__/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </Tag>
          <Tag icon={<MailOutlined />}>
            <a href="mailto:chancethecoder@gmail.com">E-mail</a>
          </Tag>
        </p>
      </section>
      <section id="experience" className="markdown">
        <h2>Experience</h2>
        <h3 id="experience-11street">11Street</h3>
        <Text mark>10/2018 ~ current</Text>
        <ul>
          <li>
            Data Handling
            <ul>
              <li>Ingest client/server log from Kafka to Hadoop cluster using consumers</li>
              <li>ETLs using Spark, Airflow</li>
              <li>Gather metrics from k8s cluster by Elastic stack</li>
            </ul>
          </li>
          <li>
            DevOps
            <ul>
              <li>Tools like Jupyterhub(z2jh), Rstudio, Metabase, etc</li>
              <li>In-house applications for data play</li>
              <li>Integrate applications with Kubernetes</li>
            </ul>
          </li>
          <li>
            Hadoop Cluster Migration (10+ PB size)
          </li>
        </ul>
        <h3 id="experience-interpark">Interpark</h3>
        <Text mark>05/2017 ~ 10/2018</Text>
        <ul>
          <li>
            DevOps
            <ul>
              <li>Tag based User behavior tracking script like GTM(Google Tag Manager)</li>
              <li>In-house BI tools</li>
            </ul>
          </li>
        </ul>
      </section>
      <section id="skillset" className="markdown">
        <h2>Skillset</h2>
        <ul>
          <li>
            Programming Language
            <ul>
              <li>Javscript <Tag color="green">Most</Tag></li>
              <li>Python, Java, Scala</li>
            </ul>
          </li>
          <li>
            Frameworks
            <ul>
              <li>Spark</li>
              <li>Spring, Nodejs</li>
            </ul>
          </li>
          <li>Kubernetes</li>
          <li>Linux</li>
        </ul>
      </section>
    </div>
    <Anchor>
      <Link href="#introduce" title="About me" />
      <Link href="#experience" title="Experience">
        <Link href="#experience-11street" title="11street" />
        <Link href="#experience-interpark" title="Interpark" />
      </Link>
      <Link href="#skillset" title="Skillset" />
    </Anchor>
  </div>
);

export default AboutMe;
