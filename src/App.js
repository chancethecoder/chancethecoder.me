import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import ProfileCard from './components/ProfileCard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col sm="8">
              <Media>
                <Media body>
                  <Media heading>
                    Welcome!
                  </Media>
                  I am a programmer who can proudly call myself an enthusiast. <br />
                  I like climbing, cycling, traveling and most of all I want to do my job well. <br />
                  It is hard to work and study together, but I try to study steadily. <br />
                  If you want to study together, please contact me.
                </Media>
              </Media>
            </Col>
            <Col sm="4">
              <ProfileCard />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default App;
