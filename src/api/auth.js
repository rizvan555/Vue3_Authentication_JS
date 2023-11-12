import axios from './axios';

const register = (credentials) => {
  return axios.post('/register', credentials);
};

const login = (credentials) => {
  return axios.post('/login', credentials);
};

export default {
  register,
  login,
};
