import axios from 'axios';

const BASE_URL = 'https://kdt.frontend.5th.programmers.co.kr:5003';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    localStorage.setItem('Token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    localStorage.setItem('Token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await api.post('/logout');
    localStorage.removeItem('Token');
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

export const getAuthUser = async () => {
  const token = localStorage.getItem('Token');
  if (!token) {
    throw new Error('No auth token found');
  }

  try {
    const response = await api.get('/auth-user');
    if (!response.data) {
      throw new Error('No user data received');
    }
    return response.data;
  } catch (error) {
    console.error('Get auth user error:', error);
    localStorage.removeItem('Token');
    throw error;
  }
};

export const createChannel = async (channelData) => {
  try {
    const response = await api.post('/channels/create', channelData);
    return response.data;
  } catch (error) {
    console.error('Create channel error:', error);
    throw error;
  }
};

export const getChannelList = async () => {
  try {
    const response = await api.get('/channels');
    return response.data;
  } catch (error) {
    console.error('Get channel list error:', error);
    throw error;
  }
};

export const getProductChannel = async (channelId) => {
  try {
    const response = await api.get(`/posts/channel/${channelId}`);
    return response.data;
  } catch (error) {
    console.error('Get channel list error:', error);
    throw error;
  }
};

export const getKnowledgeChannel = async (channelId) => {
  try {
    const response = await api.get(`/posts/channel/${channelId}`);
    return response.data;
  } catch (error) {
    console.error('Get channel list error:', error);
    throw error;
  }
};

export const getAllSearchResult = async (keyword) => {
  try {
    const response = await api.get(`/search/all/${keyword}`);
    return response.data;
  } catch (error) {
    console.error('Get All Search Result:', error);
    throw error;
  }
};

export default api;