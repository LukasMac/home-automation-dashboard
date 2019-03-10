import {
  generateRequestActionTypesFor,
  generateRequestActions
} from "../lib/requestActions";
import blindOpenerWebAPI from "../lib/web-apis/blindOpenerWebAPI";

export const types = {
  IP_CHANGE: "IP_CHANGE",
  SPEED_UPWARDS_CHANGE: "SPEED_UPWARDS_CHANGE",
  SPEED_DOWNWARDS_CHANGE: "SPEED_DOWNWARDS_CHANGE",
  DELAY_TO_OPEN_CHANGE: "DELAY_TO_OPEN_CHANGE",
  DELAY_TO_CLOSE_CHANGE: "DELAY_TO_CLOSE_CHANGE",
  ...generateRequestActionTypesFor("OPEN_BLINDS"),
  ...generateRequestActionTypesFor("CLOSE_BLINDS_UPWARDS"),
  ...generateRequestActionTypesFor("CLOSE_BLINDS_DOWNWARDS"),
  ...generateRequestActionTypesFor("MOVE_BLINDS_UP"),
  ...generateRequestActionTypesFor("MOVE_BLINDS_DOWN")
};

export const ipChange = (value, index) => {
  return {
    type: types.IP_CHANGE,
    value,
    index
  };
};

export const speedUpwardsChange = (value, index) => {
  return {
    type: types.SPEED_UPWARDS_CHANGE,
    value,
    index
  };
};

export const speedDownwardsChange = (value, index) => {
  return {
    type: types.SPEED_DOWNWARDS_CHANGE,
    value,
    index
  };
};

export const delayToOpenChange = (value, index) => {
  return {
    type: types.DELAY_TO_OPEN_CHANGE,
    value,
    index
  };
};

export const delayToCloseChange = (value, index) => {
  return {
    type: types.DELAY_TO_CLOSE_CHANGE,
    value,
    index
  };
};

export const openBlinds = blindControlData => {
  const { requestStarted, requestSucceeded } = generateRequestActions(
    types.OPEN_BLINDS
  );

  return async dispatch => {
    dispatch(requestStarted());

    for (let key of Object.keys(blindControlData)) {
      await blindOpenerWebAPI.open(blindControlData[key]);
    }
    dispatch(requestSucceeded({}));
  };
};

export const closeBlindsUpwards = blindControlData => {
  const { requestStarted, requestSucceeded } = generateRequestActions(
    types.CLOSE_BLINDS_UPWARDS
  );

  return async dispatch => {
    dispatch(requestStarted());

    for (let key of Object.keys(blindControlData)) {
      await blindOpenerWebAPI.closeUpwards(blindControlData[key]);
    }
    dispatch(requestSucceeded({}));
  };
};

export const closeBlindsDownwards = blindControlData => {
  const { requestStarted, requestSucceeded } = generateRequestActions(
    types.CLOSE_BLINDS_DOWNWARDS
  );

  return async dispatch => {
    dispatch(requestStarted());

    for (let key of Object.keys(blindControlData)) {
      await blindOpenerWebAPI.closeDownwards(blindControlData[key]);
    }

    dispatch(requestSucceeded({}));
  };
};

export const moveBlindsUp = blindControlData => {
  const { requestStarted, requestSucceeded } = generateRequestActions(
    types.CLOSE_BLINDS_DOWNWARDS
  );

  return async dispatch => {
    dispatch(requestStarted());

    for (let key of Object.keys(blindControlData)) {
      await blindOpenerWebAPI.moveUp(blindControlData[key]);
    }
    dispatch(requestSucceeded({}));
  };
};

export const moveBlindsDown = blindControlData => {
  const { requestStarted, requestSucceeded } = generateRequestActions(
    types.CLOSE_BLINDS_DOWNWARDS
  );

  return async dispatch => {
    dispatch(requestStarted());

    for (let key of Object.keys(blindControlData)) {
      await blindOpenerWebAPI.moveDown(blindControlData[key]);
    }
    dispatch(requestSucceeded({}));
  };
};
