import { combineReducers } from 'redux';
import { reducer as testReducer } from '../pages/test/store';

export default combineReducers({
  test: testReducer,
});
