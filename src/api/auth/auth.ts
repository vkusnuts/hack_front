import { apiInstance } from '../instances/api';

export const registration = async (login: string, password: string) => {
  return await apiInstance.post('/auth/register', { login, password });
};

export const login = async (login: string, password: string) => {
  return await apiInstance.post('/auth/login', { login, password });
};
