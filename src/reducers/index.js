import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import aggregationReducer from './aggregationReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  data : dataReducer,
  aggregation : aggregationReducer,
});
