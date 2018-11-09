import { generateRequestActionTypesFor, generateRequestActions } from '../lib/requestActions';
import trafficInfoWebAPI from '../lib/web-apis/trafficInfoWebAPI';
import blindOpenerWebAPI from '../lib/web-apis/trafficInfoWebAPI';

export const types = {
  ...generateRequestActionTypesFor('OPEN_BLINDS'),
  ...generateRequestActionTypesFor('CLOSE_BLINDS_UPWORDS'),
  ...generateRequestActionTypesFor('FETCH_TRAFFIC_INFO'),
};

export const openBlinds = () => {
  const {
    requestAction,
    successAction,
    failureAction
  } = generateRequestActions(types.OPEN_BLINDS);

  return (dispatch, getState) => {
    dispatch(requestAction());

    blindOpenerWebAPI.open().then(
      response => dispatch(successAction(response)),
      error => dispatch(failureAction(error))
    );
  };
};

export const fetchTrafficInfo = () => {
  const {
    requestAction,
    successAction,
    failureAction
  } = generateRequestActions(types.FETCH_TRAFFIC_INFO);

  return (dispatch, getState) => {
    dispatch(requestAction());

    trafficInfoWebAPI.mainInfo().then(
      response => dispatch(successAction(response)),
      error => dispatch(failureAction(error))
    );
  };
};
