import axios from "axios";

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

// AUTHORIZATION API:

const setToken = (token) => {
  if (token) {
    return instance.defaults.headers.common.authorization = `Bearer ${token}`;
  }
  instance.defaults.headers.common.authorization = '';
};

export const signup = async (data) => {
  const { data: result } = await instance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const login = async (data) => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const logout = async () => {
  const data = await instance.post('/users/logout');
  setToken();
  return data;
};

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;  
  } catch (error) {
    setToken();
    throw error;
  }
};

// CONTACT BOOK API:

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async (data) => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removeContact = async (id) => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  return result;
};

export default instance;

