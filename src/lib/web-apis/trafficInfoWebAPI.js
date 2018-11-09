import axios from 'axios';

export default {
  mainInfo: () => axios.get("https://jsonplaceholder.typicode.com/todos/1"),
}
