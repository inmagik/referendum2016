import { SET_AGGREGATION } from '../actions';

const defaultState = 'PROVINCIA';
export default (previousState = defaultState, { type, payload }) => {
  switch (type) {
    case SET_AGGREGATION:
      return payload;
    default:
      return previousState;
  }
};
