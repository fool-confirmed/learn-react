import { combineReducers } from 'redux';
import { dataReduce } from './data-reduce';
import { regExpReduce } from './regexp-reduce';

const appReducers = combineReducers({
  dataReduce,
  regExpReduce
});

export default appReducers;