import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const APIClient = async (
  url: string,
  { data, method = 'GET', headers: _headers = {}, ...customConfig }: AxiosRequestConfig = {}
) => {

  let headers = {} as {
    'Content-Type': string;
  };
  headers['Content-Type'] = _headers?.['Content-Type'] || 'application/json';

  const config = {
    headers,
    method,
    data,
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`,
    ...customConfig,
  } as AxiosRequestConfig;

  try {
    const result = await Axios(config);
    return result.data;
  } catch (error) {
    throw error;
  }
}

Axios.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    if (error.response && (error.response.status === 401 || error.response.status === 410)) {
    }
    return Promise.reject(error.response);
  },
);

