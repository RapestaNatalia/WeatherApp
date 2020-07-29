import axios from 'axios';

export function fetchUrl(url) {
  return axios.get(url);
}
