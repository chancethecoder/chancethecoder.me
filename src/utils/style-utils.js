import { css, keyframes } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

/* eslint-disable no-param-reassign */
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

export const appearsOut = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.96,.96,.96);
  }
  to {
    transform: translateZ(0);
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  from {
    opacity: 0;
    margin-left: 100%;
  }
  to {
    opacity: 1;
    margin-left: 0%;
  }
`;

export const slideOut = keyframes`
  from {
    opacity: 1;
    margin-left: 100%;
  }
  to {
    opacity: 0;
    margin-left: 0%;
  }
`;
