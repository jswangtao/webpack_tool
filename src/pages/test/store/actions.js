/*
action creator模块
 */
import { INCREMENT, DECREMENT } from './action-types';

export const increment = (number) => ({ type: INCREMENT, number });
export const decrement = (number) => ({ type: DECREMENT, number });


export const asyncIncrement = (num) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(num));
  }, 1000);
};
