import { combineReducers } from 'redux';
import trafficInfoReducer from './trafficInfoReducer';

const rootReducer = combineReducers({ trafficInfoReducer });

export default rootReducer;
