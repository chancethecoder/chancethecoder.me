import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import {
  MovingBallCursor,
  RiffleCursor,
} from 'pages/components/CursorAnimation';

const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export default class ChangeCursor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorStyle: 0,
    };

    this.increaseCursorStyle = this.increaseCursorStyle.bind(this);
  }

  increaseCursorStyle() {
    this.setState({ cursorStyle: (this.state.cursorStyle + 1) % 3 });
  }

  render() {
    return (
      <div>
        <Button scaleOnHover large bold onClick={this.increaseCursorStyle}>
          Change cursor!
        </Button>
        <Background>
          {
            [
              undefined,
              <MovingBallCursor />,
              <RiffleCursor />,
            ][this.state.cursorStyle]
          }
        </Background>
      </div>
    );
  }
}
