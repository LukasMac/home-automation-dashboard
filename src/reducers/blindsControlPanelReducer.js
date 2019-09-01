import { types } from '../actions/blindsControlPanelActions';

const BLINDS_CONTROL_STATE = 'blindsControlState';
const initialState = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} };

let newState;
export default (state = initialState, action) => {
  switch (action.type) {
    case types.IP_CHANGE:
      newState = {
        ...state,
        [action.index]: { ...state[action.index], ip: action.value }
      }
      localStorage.setItem(BLINDS_CONTROL_STATE, JSON.stringify(newState));

      return newState;
    case types.SPEED_UPWARDS_CHANGE:
      newState = {
        ...state,
        [action.index]: { ...state[action.index], speedUpwards: action.value }
      }
      localStorage.setItem(BLINDS_CONTROL_STATE, JSON.stringify(newState));

      return newState;
    case types.SPEED_DOWNWARDS_CHANGE:
      newState = {
        ...state,
        [action.index]: { ...state[action.index], speedDownwards: action.value }
      }
      localStorage.setItem(BLINDS_CONTROL_STATE, JSON.stringify(newState));

      return newState;
    case types.DELAY_TO_OPEN_CHANGE:
      newState = {
        ...state,
        [action.index]: { ...state[action.index], delayToOpen: action.value }
      }
      localStorage.setItem(BLINDS_CONTROL_STATE, JSON.stringify(newState));

      return newState;
    case types.DELAY_TO_CLOSE_CHANGE:
      newState = {
        ...state,
        [action.index]: { ...state[action.index], delayToClose: action.value }
      }
      localStorage.setItem(BLINDS_CONTROL_STATE, JSON.stringify(newState));

      return newState;
    default:
      return state;
  }
}
