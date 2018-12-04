import { REG_EXP_MATCH } from '../actions/regexp-action';

const initialState = {
  source: "",
  regexp: "",
  matches: [] 
};

function findMatches(source, regexp) {
  let re = new RegExp(regexp, 'g');
  return source.match(re);
}

export function regExpReduce(state = initialState, action) {
  switch(action.type) {
    case REG_EXP_MATCH:
      return Object.assign({}, {source: action.source, regexp: action.regexp, matches: findMatches(action.source, action.regexp)});
    default:
      return state;
  }
}