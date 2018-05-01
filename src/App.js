import React, { Component } from 'react';
import MyName from './components/MyName';
import SocialList from './components/SocialList';

class App extends Component {
  render() {
    return (
      <div>
        <MyName />
        <SocialList />
      </div>
    );
  }
}

export default App;
