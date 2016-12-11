import { SET_DATASET } from '../actions';

const defaultState = [];
export default (previousState = defaultState, { type, payload }) => {
  switch (type) {
    case SET_DATASET:
      return payload;
    default:
      return previousState;
  }
};
