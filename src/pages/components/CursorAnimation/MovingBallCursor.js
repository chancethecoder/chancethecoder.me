import React, { Component } from 'react';
import { StaggeredMotion, spring, presets } from 'react-motion';
import styled from 'styled-components';

const rgbCodeFromCoordinates = (xCoordinate, yCoordinate) => {
  const xRatio = ((window.innerWidth - xCoordinate) / window.innerWidth);
  const yRatio = ((window.innerHeight - yCoordinate) / window.innerHeight);
  const zRatio = xRatio * yRatio;
  const hexCovert = r => parseInt(255 * r, 10).toString(16);

  return `#${hexCovert(xRatio)}${hexCovert(yRatio)}${hexCovert(zRatio)}`;
};

const Ball = styled.div`
  border-radius: 99px;
  width: 50px;
  height: 50px;
  border: 1.5px solid #000;
  position: absolute;
`;

class MovingBallCursor extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable react/no-unused-state */
    this.state = {
      x: 250,
      y: 300,
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchmove', this.handleTouchMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('touchmove', this.handleTouchMove);
  }

  getStyles = (prevStyles) => {
    const endValue = prevStyles.map((_, i) => (i === 0
      ? this.state
      : {
        x: spring(prevStyles[i - 1].x, presets.gentle),
        y: spring(prevStyles[i - 1].y, presets.gentle),
      }));
    return endValue;
  }

  handleMouseMove = ({ pageX: x, pageY: y }) => {
    /* eslint-disable react/no-unused-state */
    this.setState({ x, y });
  }

  handleTouchMove = ({ touches }) => {
    this.handleMouseMove(touches[0]);
  }

  render() {
    return (
      <StaggeredMotion
        defaultStyles={[...Array(6).keys()].map(() => ({ x: 0, y: 0 }))}
        styles={this.getStyles}
      >
        {balls =>
          (
            <div>
              {balls.map(({ x, y }, i) =>
                (<Ball
                  /* eslint-disable react/no-array-index-key */
                  key={i}
                  style={{
                    WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                    transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                    zIndex: balls.length - i,
                    border: `1.5px solid ${rgbCodeFromCoordinates(x, y)}`,
                  }}
                />))}
            </div>
          )
        }
      </StaggeredMotion>
    );
  }
}

export default MovingBallCursor;
