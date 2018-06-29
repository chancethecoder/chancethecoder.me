import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import MovingBallCursor from 'pages/components/MovingBallCursor';
import RiffleCursor from 'pages/components/RiffleCursor';

const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const StyledButton = styled.button`
  display: inline-block;
  color: ${props => (props.outlined ? props.background : props.color)};
  background: ${props => (props.outlined ? props.color : props.background)};
  font-weight: bold;
  font-size: 20px;
  padding: 16px 64px;
  margin-bottom: 24px;
  margin-right: 16px;
  border-radius: 2px;
  cursor: pointer;
  transition: transform .25s ease;
  border: ${props => (props.outlined ? `1.5px solid ${props.background}` : 'none')};
`;

StyledButton.defaultProps = {
  background: '#ff5a5f',
  color: '#FFF',
  outlined: false,
};

StyledButton.propTypes = {
  background: propTypes.string,
  color: propTypes.string,
  outlined: propTypes.boolean,
};

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
        <StyledButton onClick={this.increaseCursorStyle}>
          Change cursor!
        </StyledButton>
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
