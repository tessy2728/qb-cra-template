import { getAccessToken } from '../../pages/Auth/helper';
export const onRequest = config => {
  const token = getAccessToken();
  const headers = token ? {
    Authorization: `Bearer ${token}`
  } : {};
  config.headers = {
    'Content-type': 'application/json',
    ...config.headers,
    ...headers
  };
  return config;
};
export const onRequestError = error => Promise.reject(error);