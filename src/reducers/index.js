import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import resizeReducer from './resizeReducer';
import localeReducer from './localeReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  screen: resizeReducer,
  locale: localeReducer,
});

export default rootReducer;
