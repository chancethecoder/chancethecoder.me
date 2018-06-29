import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
`;

export default class ChangeCursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: 'change me!',
    };

    this.changeHeaderText = this.changeHeaderText.bind(this);
  }

  changeHeaderText(event) {
    this.setState({ headerText: event.target.value });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.state.headerText} | Chancethecoder</title>
        </Helmet>
        <StyledInput
          type="text"
          value={this.state.headerText}
          onChange={this.changeHeaderText}
        />
      </div>
    );
  }
}
