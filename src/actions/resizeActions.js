import { SCREEN_RESIZE } from 'types/actionTypes';

/* eslint-disable import/prefer-default-export */
export function screenResize(screenWidth) {
  return {
    type: SCREEN_RESIZE,
    screenWidth,
  };
}
