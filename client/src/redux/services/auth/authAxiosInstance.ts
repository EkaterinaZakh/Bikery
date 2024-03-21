import axios from 'axios';

// refreshToken
const authAxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_TITLE}/api`,
  withCredentials: true,
});

export default authAxiosInstance;
