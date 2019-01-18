import { generateRequestActionTypesFor, generateRequestActions } from '../lib/requestActions';
import blindOpenerWebAPI from '../lib/web-apis/blindOpenerWebAPI';

export const types = {
  IP_CHANGE: 'IP_CHANGE',
  SPEED_UPWARDS_CHANGE: 'SPEED_UPWARDS_CHANGE',
  SPEED_DOWNWARDS_CHANGE: 'SPEED_DOWNWARDS_CHANGE',
  DELAY_TO_OPEN_CHANGE: 'DELAY_TO_OPEN_CHANGE',
  DELAY_TO_CLOSE_CHANGE: 'DELAY_TO_CLOSE_CHANGE',
  ...generateRequestActionTypesFor('OPEN_BLINDS'),
  ...generateRequestActionTypesFor('CLOSE_BLINDS_UPWARDS'),
  ...generateRequestActionTypesFor('CLOSE_BLINDS_DOWNWARDS'),
  ...generateRequestActionTypesFor('MOVE_BLINDS_UP'),
  ...generateRequestActionTypesFor('MOVE_BLINDS_DOWN'),
};

export const ipChange = (value, index) => {
  return {
    type: types.IP_CHANGE,
    value,
    index,
  }
}

export const speedUpwardsChange = (value, index) => {
  return {
    type: types.SPEED_UPWARDS_CHANGE,
    value,
    index,
  }
}

export const speedDownwardsChange = (value, index) => {
  return {
    type: types.SPEED_DOWNWARDS_CHANGE,
    value,
    index,
  }
}

export const delayToOpenChange = (value, index) => {
  return {
    type: types.DELAY_TO_OPEN_CHANGE,
    value,
    index,
  }
}

export const delayToCloseChange = (value, index) => {
  return {
    type: types.DELAY_TO_CLOSE_CHANGE,
    value,
    index,
  }
}

export const openBlinds = (blindControlData) => {
  const {
    requestStarted,
    requestSucceeded,
    requestFailed,
  } = generateRequestActions(types.OPEN_BLINDS);

  return (dispatch, getState) => {
    dispatch(requestStarted());

    Promise.all(
      Object.keys(blindControlData).map(key =>
        blindOpenerWebAPI.open(blindControlData[key])
      )
    ).then(
      response => dispatch(requestSucceeded(response)),
      error => dispatch(requestFailed(error))
    );
  };
};

export const closeBlindsUpwards = (blindControlData) => {
  const {
    requestStarted,
    requestSucceeded,
    requestFailed,
  } = generateRequestActions(types.CLOSE_BLINDS_UPWARDS);

  return (dispatch, getState) => {
    dispatch(requestStarted());


    Promise.all(
      Object.keys(blindControlData).map(key =>
        blindOpenerWebAPI.closeUpwards(blindControlData[key])
      )
    ).then(
      response => dispatch(requestSucceeded(response)),
      error => dispatch(requestFailed(error))
    );
  };
};

export const closeBlindsDownwards = (blindControlData) => {
  const {
    requestStarted,
    requestSucceeded,
    requestFailed,
  } = generateRequestActions(types.CLOSE_BLINDS_DOWNWARDS);

  return (dispatch, getState) => {
    dispatch(requestStarted());

    Promise.all(
      Object.keys(blindControlData).map(key =>
        blindOpenerWebAPI.closeDownwards(blindControlData[key])
      )
    ).then(
      response => dispatch(requestSucceeded(response)),
      error => dispatch(requestFailed(error))
    );
  };
};

export const moveBlindsUp = (blindControlData) => {
  const {
    requestStarted,
    requestSucceeded,
    requestFailed,
  } = generateRequestActions(types.CLOSE_BLINDS_DOWNWARDS);

  return (dispatch, getState) => {
    dispatch(requestStarted());

    Promise.all(
      Object.keys(blindControlData).map(key =>
        blindOpenerWebAPI.moveUp(blindControlData[key])
      )
    ).then(
      response => dispatch(requestSucceeded(response)),
      error => dispatch(requestFailed(error))
    );
  };
};

export const moveBlindsDown = (blindControlData) => {
  const {
    requestStarted,
    requestSucceeded,
    requestFailed,
  } = generateRequestActions(types.CLOSE_BLINDS_DOWNWARDS);

  return (dispatch, getState) => {
    dispatch(requestStarted());

    Promise.all(
      Object.keys(blindControlData).map(key =>
        blindOpenerWebAPI.moveDown(blindControlData[key])
      )
    ).then(
      response => dispatch(requestSucceeded(response)),
      error => dispatch(requestFailed(error))
    );
  };
};
