import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: 'chancethecoder'
  }

  render() {
    return (
      <div>
        안녕하세요, 저는 <b>{this.props.name}</b> 입니다. <br />
        Hello, My name is <b>{this.props.name}</b>. 
      </div>
    );
  }
}

export default MyName;
