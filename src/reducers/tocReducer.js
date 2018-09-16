import { SET_TOC_TARGET } from 'types/actionTypes';

const initialState = {
  contents: [],
};

export default function tocReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOC_TARGET:
      return Object.assign({}, state, {
        contents: action.contents,
      });
    default:
      return state;
  }
}
