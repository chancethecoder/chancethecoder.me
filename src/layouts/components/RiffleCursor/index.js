import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import styled from 'styled-components';

const rgbCodeFromCoordinates = (xCoordinate, yCoordinate) => {
  const xRatio = ((window.innerWidth - xCoordinate) / window.innerWidth);
  const yRatio = ((window.innerHeight - yCoordinate) / window.innerHeight);
  const zRatio = xRatio * yRatio;
  const hexCovert = r => parseInt(255 * r, 10).toString(16);

  return `#${hexCovert(xRatio)}${hexCovert(yRatio)}${hexCovert(zRatio)}`;
};

const Riffle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 99px;
  position: absolute;
  border: 1px solid lightblue;
`;

const leavingSpringConfig = { stiffness: 60, damping: 15 };

export default class RiffleCursor extends Component {
  constructor(props) {
    super(props);
    this.state = { mouse: [], now: `t${0}` };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchmove', this.handleTouchMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('touchmove', this.handleTouchMove);
  }

  handleMouseMove = ({ pageX, pageY }) => {
    this.setState(() => ({
      mouse: [pageX - 25, pageY - 25],
      now: `t${Date.now()}`,
    }));
  };

  handleTouchMove = (e) => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  willLeave = styleCell => ({
    ...styleCell.style,
    opacity: spring(0, leavingSpringConfig),
    scale: spring(2, leavingSpringConfig),
  });

  render() {
    const { mouse: [mouseX, mouseY], now } = this.state;
    const styles = mouseX == null ? [] : [{
      key: now,
      style: {
        opacity: spring(1),
        scale: spring(0),
        x: spring(mouseX),
        y: spring(mouseY),
      },
    }];
    return (
      <TransitionMotion willLeave={this.willLeave} styles={styles}>
        {circles =>
          (
            <div>
              {circles.map(({
                key,
                style: {
                  opacity,
                  scale,
                  x,
                  y,
                },
              }) =>
                (<Riffle
                  key={key}
                  style={{
                    opacity,
                    scale,
                    transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                    WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                    border: `1px solid ${rgbCodeFromCoordinates(x, y)}`,
                  }}
                />))}
            </div>
          )
        }
      </TransitionMotion>
    );
  }
}
