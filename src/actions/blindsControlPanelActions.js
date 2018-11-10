import { generateRequestActionTypesFor, generateRequestActions } from '../lib/requestActions';
import blindOpenerWebAPI from '../lib/web-apis/blindOpenerWebAPI';

export const types = {
  ...generateRequestActionTypesFor('OPEN_BLINDS'),
  ...generateRequestActionTypesFor('CLOSE_BLINDS_UPWARDS'),
  ...generateRequestActionTypesFor('CLOSE_BLINDS_DOWNWARDS'),
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

export const closeBlindsUpwards = () => {
  const {
    requestAction,
    successAction,
    failureAction
  } = generateRequestActions(types.CLOSE_BLINDS_UPWARDS);

  return (dispatch, getState) => {
    dispatch(requestAction());

    blindOpenerWebAPI.closeUpwards().then(
      response => dispatch(successAction(response)),
      error => dispatch(failureAction(error))
    );
  };
};

export const closeBlindsDownwards = () => {
  const {
    requestAction,
    successAction,
    failureAction
  } = generateRequestActions(types.CLOSE_BLINDS_DOWNWARDS);

  return (dispatch, getState) => {
    dispatch(requestAction());

    blindOpenerWebAPI.closeDownwards().then(
      response => dispatch(successAction(response)),
      error => dispatch(failureAction(error))
    );
  };
};
