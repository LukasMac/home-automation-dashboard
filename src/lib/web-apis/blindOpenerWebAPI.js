import axios from 'axios';

export const HOST = 'http://192.168.0.100';

export default {
  open: () => axios.get(HOST + '/open'),
  closeUpwards: () => axios.get(HOST + '/close_upwards'),
  closeDownwards: () => axios.get(HOST + '/close_downwards'),
}
