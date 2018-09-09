import { SET_LOCALE } from 'types/actionTypes';

const initialState = {
  lang: 'en',
};

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE:
      return Object.assign({}, state, {
        lang: state.lang === 'en' ? 'ko' : 'en',
      });
    default:
      return state;
  }
}
