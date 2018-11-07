import { types } from '../actions/trafficInfoActions';

const initialState = {
  cnt: 0,
}

const onClick = state => ({
  ...state,
  cnt: state.cnt + 1,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CLICK:
      return onClick(state);
    default:
      return state;
  }
}
