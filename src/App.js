import React, { Component, Fragment } from 'react';
import { Container, Media } from 'reactstrap';
import ProfileCard from './components/ProfileCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Media>
            <Media body>
              <Media heading>
                Welcome!
              </Media>
              I am a programmer who can proudly call myself an enthusiast. <br />
              I like climbing, cycling, traveling and most of all I want to do my job well. <br />
              If you want to work together, please contact me.
            </Media>
            <Media body>
              <ProfileCard />
            </Media>
          </Media>
        </Container>
      </Fragment>
    );
  }
}

export default App;
