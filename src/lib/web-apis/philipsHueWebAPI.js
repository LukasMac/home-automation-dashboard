import axios from "axios";

const host = JSON.parse(localStorage.getItem("philipsHueBridgeIP") || "{}")[
  "value"
];
const username = JSON.parse(localStorage.getItem("philipsHueApiUser") || "{}")[
  "value"
];

const generateLightURL = id => {
  return `http://${host}/api/${username}/lights/${id}/state`;
};

export default {
  lightOn: id => axios.put(generateLightURL(id), { on: true }),
  lightOff: id => axios.put(generateLightURL(id), { on: false })
};
