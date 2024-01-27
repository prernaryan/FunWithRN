// request
import axios from 'axios';
import {store} from '../redux/store';
import {showAppToast} from '../redux/actions/loader';
import {BASE_URL} from '../constants/Constants';

const axiosRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 90000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

axiosRequest.interceptors.request.use(
  request => {
    const token = store.getState().Auth.auth_token;
    console.log(token, 'token:::::::::');
    if (token) {
      request.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    if (request.data instanceof FormData) {
      request.headers['Content-Type'] = 'multipart/form-data';
    }
    return request;
  },
  error => {
    console.log(error, 'error:::::::');
    return Promise.reject(error);
  },
);

// Response interceptor
axiosRequest.interceptors.response.use(
  response => response,
  async function (error) {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
      return Promise.reject(error);
    }
    return error.response;
  },
);

const handleNotFoundError = () => {
  // store.dispatch({type: AUTH_LOG_OUT});
};

const handleAxiosError = error => {
  console.log(error.response, ' error.response');
  const errorMessage =
    error.response?.data?.details ||
    error.response?.data?.error ||
    error.response?.data?.errorObj[0]?.errorMessage ||
    error.message;
  if (errorMessage) {
    let msg = '';

    if (typeof errorMessage === 'string') {
      msg = errorMessage;
    } else if (typeof errorMessage === 'object') {
      msg = Object.values(errorMessage)
        .flatMap(err => (Array.isArray(err) ? err : [err]))
        .join(' ');
    }

    if (msg) {
      store.dispatch(showAppToast(true, msg));
      return msg;
    }
  }

  return '';
};

export default axiosRequest;
