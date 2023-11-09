import axios from 'axios';
import { useAuthStore } from '../stores/Auth/authStore';

const niuxApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});

niuxApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  console.log({ token });

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export { niuxApi };
