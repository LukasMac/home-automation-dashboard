import { generateRequestActionTypesFor, generateRequestActions } from '../lib/requestActions';
import blindOpenerWebAPI from '../lib/web-apis/blindOpenerWebAPI';

export const types = {
  ...generateRequestActionTypesFor('OPEN_BLINDS'),
  ...generateRequestActionTypesFor('CLOSE_BLINDS_UPWORDS'),
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
