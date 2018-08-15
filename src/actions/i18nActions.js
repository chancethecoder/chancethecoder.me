import { SET_LOCALE } from 'types/actionTypes';

/* eslint-disable import/prefer-default-export */
export function setLocale(locale) {
  return {
    type: SET_LOCALE,
    locale,
  };
}
