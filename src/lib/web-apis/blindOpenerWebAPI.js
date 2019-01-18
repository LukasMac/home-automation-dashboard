import axios from 'axios';

const generateOpenURL = (blindControlerData) => {
  return `http://${blindControlerData.ip}/open?delayMS=${blindControlerData.delayToOpen}&speedUpwards=${blindControlerData.speedUpwards}&speedDownwards=${blindControlerData.speedDownwards}`;
}

const generateCloseUpwardsURL = (blindControlerData) => {
  return `http://${blindControlerData.ip}/close_upwards?speedUpwards=${blindControlerData.speedUpwards}&delayMS=${blindControlerData.delayToClose}`;
}

const generateCloseDownwardsURL = (blindControlerData) => {
  return `http://${blindControlerData.ip}/close_downwards?speedDownwards=${blindControlerData.speedDownwards}&delayMS=${blindControlerData.delayToClose}`
}

const generateMoveUpURL = (blindControlerData) => {
  return `http://${blindControlerData.ip}/close_upwards?speedUpwards=${blindControlerData.speedUpwards}&delayMS=200`;
}

const generateMoveDownURL = (blindControlerData) => {
  return `http://${blindControlerData.ip}/close_downwards?speedUpwards=${blindControlerData.speedDownwards}&delayMS=200`;
}

export default {
  open: (blindControlerData) => axios.get(generateOpenURL(blindControlerData)),
  closeUpwards: (blindControlerData) => axios.get(generateCloseUpwardsURL(blindControlerData)),
  closeDownwards: (blindControlerData) => axios.get(generateCloseDownwardsURL(blindControlerData)),
  moveUp: (blindControlerData) => axios.get(generateMoveUpURL(blindControlerData)),
  moveDown: (blindControlerData) => axios.get(generateMoveDownURL(blindControlerData)),
}
