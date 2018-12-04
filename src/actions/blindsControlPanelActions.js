import { generateRequestActionTypesFor, generateRequestActions } from '../lib/requestActions';
import blindOpenerWebAPI from '../lib/web-apis/blindOpenerWebAPI';

export const types = {
  ...generateRequestActionTypesFor('OPEN_BLINDS'),
  ...generateRequestActionTypesFor('CLOSE_BLINDS_UPWARDS'),
  ...generateRequestActionTypesFor('CLOSE_BLINDS_DOWNWARDS'),
};

export const openBlinds = () => {
  const {
    requestStarted,
    requestSucceeded,
    requestFailed,
  } = generateRequestActions(types.OPEN_BLINDS);

  return (dispatch, getState) => {
    dispatch(requestStarted());

    blindOpenerWebAPI.open().then(
      response => dispatch(requestSucceeded(response)),
      error => dispatch(requestFailed(error))
    );
  };
};

export const closeBlindsUpwards = () => {
  const {
    requestStarted,
    requestSucceeded,
    requestFailed,
  } = generateRequestActions(types.CLOSE_BLINDS_UPWARDS);

  return (dispatch, getState) => {
    dispatch(requestStarted());

    blindOpenerWebAPI.closeUpwards().then(
      response => dispatch(requestSucceeded(response)),
      error => dispatch(requestFailed(error))
    );
  };
};

export const closeBlindsDownwards = () => {
  const {
    requestStarted,
    requestSucceeded,
    requestFailed,
  } = generateRequestActions(types.CLOSE_BLINDS_DOWNWARDS);

  return (dispatch, getState) => {
    dispatch(requestStarted());

    blindOpenerWebAPI.closeDownwards().then(
      response => dispatch(requestSucceeded(response)),
      error => dispatch(requestFailed(error))
    );
  };
};
