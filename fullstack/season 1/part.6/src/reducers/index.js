import { combineReducers } from 'redux';
import count from './count';
import close from './close';

const reducers = combineReducers({
  count, close
});

export default reducers;







