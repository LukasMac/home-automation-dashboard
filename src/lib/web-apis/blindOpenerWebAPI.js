import axios from 'axios';

const BASE_URL = 'https://europe-west1-divine-catalyst-228921.cloudfunctions.net/blindOpenerEU';

const generateUrl = (action, index = '') => {
  return `${BASE_URL}?action=${action}&index=${index}`;
}

export default {
  run: (action, index) => axios.get(generateUrl(action, index)),
}
