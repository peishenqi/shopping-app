import axios from 'axios';

const instance = axios.create({
  timeout: 5000, // 超时时间
  baseURL: 'http://api.cat-shop.penkuoer.com',
});

export function get(url, config) {
  return instance.get(url, config);
}

export function post(url, data, config) {
  return instance.post(url, data, config);
}

export function del(url, config) {
  return instance.delete(url, config);
}

// 全局请求拦截
instance.interceptors.request.use(
  function (config) {
    // 为全局的设置设置一个请求头属性
    // Do something before request is sent
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 全局响应拦截
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      window.location.href = '#/login';
    }
    return Promise.reject(error);
  }
);

export const put = (url, data) => instance.put(url, data);

// export const del = (url, data) => instance.delete(url, data);