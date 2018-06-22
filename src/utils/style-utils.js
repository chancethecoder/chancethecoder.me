import { css, keyframes } from 'styled-components';

/* eslint-disable func-names */
export const media = (function () {
  const sizes = {
    desktop: 1280,
    laptop: 1024,
    tablet: 768,
    phone: 480,
  };

  /* eslint-disable no-param-reassign */
  return Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)}
      }
    `;
    return accumulator;
  }, {});
}());

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
    margin-left: 20%;
  }
  to {
    margin-left: 0%;
  }
`;

export const slideOut = keyframes`
  from {
    margin-left: 0%;
  }
  to {
    margin-left: 20%;
  }
`;

export const show = css`
  visibility: visible;
  opacity: 1;

  transition: visibility 0s linear 0.33s, opacity 0.33s linear;
  transition-delay: 0s;
`;

export const hide = css`
  visibility: hidden;
  opacity: 0;

  transition: visibility 0s linear 0.33s, opacity 0.33s linear;
`;
