import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import screenResizeReducer from './resizeReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  screen: screenResizeReducer,
});

export default rootReducer;
