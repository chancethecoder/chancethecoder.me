import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const Image = styled.div`
  background: url('${props => props.image}');
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  position: absolute;
  background-size: cover;
  background-position: center;
`;

const ImageAnimation = props => (
  <Motion
    defaultStyle={{
      x: props.startingX,
      y: props.startingY,
      width: props.startingWidth,
      height: props.startingHeight,
    }}
    style={{
      x: spring(props.endingX),
      y: spring(props.endingY),
      width: spring(props.endingWidth),
      height: spring(props.endingHeight),
    }}
  >
    {style => (
      <Image
        x={style.x}
        y={style.y}
        width={style.width}
        height={style.height}
        image={props.image}
      />
    )}
  </Motion>
);

ImageAnimation.propTypes = {
  startingX: propTypes.number.isRequired,
  startingY: propTypes.number.isRequired,
  startingWidth: propTypes.number.isRequired,
  startingHeight: propTypes.number.isRequired,
  endingX: propTypes.number.isRequired,
  endingY: propTypes.number.isRequired,
  endingWidth: propTypes.number.isRequired,
  endingHeight: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
};

export default ImageAnimation;
