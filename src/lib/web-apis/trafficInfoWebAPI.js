import axios from "axios";

export const URL = JSON.parse(localStorage.getItem("trafficInfoURL") || "{}")[
  "value"
];

export default {
  trafficFromLuma: () => axios.get(URL)
};
