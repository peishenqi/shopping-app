import axios from "axios";
//axios.create创建一个axios实例
const instance = axios.create({});

export function get(url, config) {
  return instance.get(url, config);
}
export function post(url, data, config) {
  return instance.post(url, data, config);
}
export function put(url, data, config) {
  return instance.put(url, data, config);
}
export function del(url, config) {
  return instance.delete(url, config);
}
