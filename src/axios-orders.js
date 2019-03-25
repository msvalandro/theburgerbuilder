import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-48e05.firebaseio.com/'
});

export default instance;
