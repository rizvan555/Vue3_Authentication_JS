import axios from './axios';

const register = (credentials) => {
  return axios.post('/signUp', credentials);
};

const login = (credentials) => {
  return axios.post('/signIn', credentials);
};

export default {
  register,
  login,
};
