import axios from 'axios';

export const HOST = __DEV__ ? 'http://localhost:8081' : '';

export default {
  trafficFromLuma: () => axios.get(HOST + "/realtimedepartures"),
}
