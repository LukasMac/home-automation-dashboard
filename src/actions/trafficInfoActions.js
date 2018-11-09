import { generateRequestActionTypesFor, generateRequestActions } from '../lib/requestActions';
import trafficInfoWebAPI from '../lib/web-apis/trafficInfoWebAPI';

export const types = {
  ...generateRequestActionTypesFor('FETCH_TRAFFIC_INFO'),
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
