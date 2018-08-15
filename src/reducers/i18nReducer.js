import { SET_LOCALE } from 'types/actionTypes';

const initialState = {
  locale: 'en',
};

export default function screenResizeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE:
      return Object.assign({}, state, {
        locale: action.locale,
      });
    default:
      return state;
  }
}
