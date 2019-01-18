import axios from 'axios';

export const URL = localStorage.getItem("trafficInfoURL");

export default {
  trafficFromLuma: () => axios.get(URL),
}
