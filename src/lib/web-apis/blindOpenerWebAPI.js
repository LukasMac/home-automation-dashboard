import axios from 'axios';

export const HOST = 'http://192.168.0.100';

export default {
  open: () => axios.get(HOST + '/open'),
  close: () => axios.get(HOST + '/close'),
}
