import { types } from '../actions/trafficInfoActions';

const initialState = { }

const onFetchTrafficInfoSuccess = ({ data }) => ({
  ...((data && data.ResponseData) || {})
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TRAFFIC_INFO_SUCCESS:
      return onFetchTrafficInfoSuccess(action.data);
    default:
      return state;
  }
}
