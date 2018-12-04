import { generateRequestActionTypesFor, generateRequestActions } from '../lib/requestActions';
import trafficInfoWebAPI from '../lib/web-apis/trafficInfoWebAPI';

export const types = {
  ...generateRequestActionTypesFor('FETCH_TRAFFIC_INFO'),
};


export const fetchTrafficInfo = () => {
  const {
    requestStarted,
    requestSucceeded,
    requestFailed,
  } = generateRequestActions(types.FETCH_TRAFFIC_INFO);

  return (dispatch, getState) => {
    dispatch(requestStarted());

    trafficInfoWebAPI.trafficFromLuma().then(
      response => dispatch(requestSucceeded(response)),
      error => dispatch(requestFailed(error))
    );
  };
};
