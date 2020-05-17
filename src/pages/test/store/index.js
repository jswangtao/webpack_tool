/*
根据老的state和指定action, 处理返回一个新的state
 */
import { INCREMENT, DECREMENT } from './action-types';


// reducer
const defaultState = {
  num: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case INCREMENT:
    return { ...state, num: action.number };
  case DECREMENT:
    return { ...state, num: action.number };
  default:
    return state;
  }
};

export { reducer };
