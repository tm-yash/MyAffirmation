import {handleApiError, handleRequest, handleResponse} from './clientHelper';

import Axios from 'axios';

export function axiosClient(baseURL) {
  const clientInstance = Axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  clientInstance.interceptors.request.use(handleRequest);
  clientInstance.interceptors.response.use(handleResponse, handleApiError);

  return clientInstance;
}
