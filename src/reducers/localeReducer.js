import { TOGGLE_LOCALE } from 'types/actionTypes';

const initialState = {
  lang: 'en',
};

export default function localeReducer(state = initialState, action) {
  const toggled = state.lang === 'en' ? 'ko' : 'en';

  switch (action.type) {
    case TOGGLE_LOCALE:
      return Object.assign({}, state, {
        lang: toggled,
      });
    default:
      return state;
  }
}
