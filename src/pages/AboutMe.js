import React, { Component } from 'react';
import { Anchor, Typography } from 'antd';

const { Link } = Anchor;
const { Text } = Typography;

class AboutMe extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
      }}>
        <div className="markdown">
          <section id="introduce" className="markdown">
            <h2>About me</h2>
            <p>
              I'm a software engineer at an e-commerce company based in Gangnam, South Korea. <br/>
              I have interest in technologies such as <a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>, <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>, <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer">Kubernetes</a>. <br/>
            </p>
            <p>
              Feel free to contact me: <br/>
              <ul>
                <li>
                  <Text copyable><a href="mailto:chancethecoder@gmail.com">chancethecoder@gmail.com</a></Text>
                </li>
                <li>
                  <a href="https://github.com/chancethecoder" target="_blank">github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/youngkyun-kim/" target="_blank">linkedin</a>
                </li>
              </ul>
            </p>
          </section>
          <section id="skill" className="markdown">
            <h2>Skill</h2>
            <p>
              <ul>
                <li id="skill-programming-language">
                  Programming Language
                  <ul>
                    <li>Java</li>
                    <li>Scala</li>
                    <li>Python</li>
                    <li>Javascript</li>
                  </ul>
                </li>
                <li id="skill-data-engineering">
                  Data Engineering
                  <ul>
                    <li>Spark</li>
                    <li>Hive - MR/Tez</li>
                    <li>HDFS</li>
                    <li>Kafka</li>
                  </ul>
                </li>
                <li id="skill-devops">
                  DevOps
                  <ul>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                  </ul>
                </li>
              </ul>
            </p>
          </section>
          <section id="experience" className="markdown">
            <h2>Experience</h2>
            <h3 id="experience-11street">11Street</h3>
            <p>
              <Text mark>10/2018 ~ current</Text>
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
            </p>
            <h3 id="experience-interpark">Interpark</h3>
            <p>
              <Text mark>05/2017 ~ 10/2018</Text>
              <ul>
                <li>Application DevOps
                  <ul>
                    <li>User behavior tracking service like GTM(Google Tag Manager)</li>
                    <li>Statistics visualization service</li>
                  </ul>
                </li>
              </ul>
            </p>
            <h3 id="experience-before-working">Before Working</h3>
            <p>
              <Text mark>~02/2017</Text>
              <ul>
                <li>Studying computer science</li>
                <li>Bachelor&apos;s degree in Media at Ajou Univ</li>
              </ul>
            </p>
          </section>
        </div>
        <Anchor>
          <Link href="#introduce" title="About me" />
          <Link href="#skill" title="Skill">
            <Link href="#skill-programming-language" title="Programming Language" />
            <Link href="#skill-data-engineering" title="Data Engineering" />
            <Link href="#skill-devops" title="DevOps" />
          </Link>
          <Link href="#experience" title="Experience">
            <Link href="#experience-11street" title="11street" />
            <Link href="#experience-interpark" title="Interpark" />
            <Link href="#experience-before-working" title="Before working" />
          </Link>
        </Anchor>
      </div>
    );
  }
}

export default AboutMe;
