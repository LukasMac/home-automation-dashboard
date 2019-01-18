import { types } from '../actions/loadEnvConfigActions';

const initialState = 'not loaded yet';

export default (state = initialState, action) => {
  switch(action.type) {
    case types.LOAD_ENV_CONFIG_REQUEST:
      return 'loading....';
    case types.LOAD_ENV_CONFIG_SUCCESS:
      const data = action.data.data;
      Object.keys(data).forEach(key => {
        localStorage.setItem(key, data[key]);
      });

      return 'Success';
    case types.LOAD_ENV_CONFIG_FAILURE:
      return JSON.stringify(action.error);
    default:
      return state;
  }
}
