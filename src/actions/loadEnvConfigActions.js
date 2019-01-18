import axios from 'axios';
import { generateRequestActionTypesFor, generateRequestActions } from '../lib/requestActions';

export const types = {
  ...generateRequestActionTypesFor('LOAD_ENV_CONFIG'),
};

export const loadEnvConfig = (configURL) => {
  const {
    requestStarted,
    requestSucceeded,
    requestFailed,
  } = generateRequestActions(types.LOAD_ENV_CONFIG);

  return (dispatch, getState) => {
    dispatch(requestStarted());

    axios.get(configURL).then(
      response => dispatch(requestSucceeded(response)),
      error => dispatch(requestFailed(error))
    );
  };
};
