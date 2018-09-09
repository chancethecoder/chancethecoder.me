import { SCREEN_RESIZE } from 'types/actionTypes';

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
};

export default function resizeReducer(state = initialState, action) {
  switch (action.type) {
    case SCREEN_RESIZE:
      return Object.assign({}, state, {
        width: action.screenWidth,
      });
    default:
      return state;
  }
}
