import { combineReducers } from 'redux';
import trafficInfoReducer from './trafficInfoReducer';
import blindsControlPanelReducer from './blindsControlPanelReducer';
import loadEnvConfigReducer from './loadEnvConfigReducer';

const rootReducer = combineReducers({
  blindsControlPanelReducer ,
  trafficInfoReducer,
  loadEnvConfigReducer,
});

export default rootReducer;
