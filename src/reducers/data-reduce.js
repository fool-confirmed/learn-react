import { ADD_VALUE } from '../actions/data-action';

const initialState = {
  search: "",
  list: []
}

export function dataReduce(state = initialState, action) {  
  switch(action.type) {
    case ADD_VALUE:
      return Object.assign({}, 
        {list: state.list.indexOf(action.value) > -1 ? state.list : [...state.list, action.value]},
        {search: action.value});
    default:
      return state;
  }
}