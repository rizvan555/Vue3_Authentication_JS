import axios from './axios';

const register = (credentials) => {
  return axios.post('/users', { user: credentials });
};

export default {
  register,
};
