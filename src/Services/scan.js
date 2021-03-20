import http from './httpService';
import { apiUrl } from "../config.json";

export const getInventryData = () => {
  const apiEndPoint = `${apiUrl}/inventryList`;
  return http.get(`${apiEndPoint}`)
}


