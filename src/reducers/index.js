import { combineReducers } from 'redux';
import trafficInfoReducer from './trafficInfoReducer';
import blindsControlPanel from './blindsControlPanelReducer';

const rootReducer = combineReducers({
  blindsControlPanel,
  trafficInfoReducer,
});

export default rootReducer;
