import axios from 'axios';

const host = localStorage.getItem("philipsHueBridgeIP");
const username = localStorage.getItem("philipsHueApiUser");

const generateLightURL = (id) => {
  return `http://${host}/api/${username}/lights/${id}/state`;
}


export default {
  lightOn: (id) => axios.put(generateLightURL(id), { on: true }),
  lightOff: (id) => axios.put(generateLightURL(id), { on: false }),
}
