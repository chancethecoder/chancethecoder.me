import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import resizeReducer from './resizeReducer';
import localeReducer from './localeReducer';
import tocReducer from './tocReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  screen: resizeReducer,
  locale: localeReducer,
  toc: tocReducer,
});

export default rootReducer;
