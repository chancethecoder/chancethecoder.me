import { SET_TOC_TARGET } from 'types/actionTypes';

/* eslint-disable import/prefer-default-export */
export function setContents(contents) {
  return {
    type: SET_TOC_TARGET,
    contents,
  };
}
