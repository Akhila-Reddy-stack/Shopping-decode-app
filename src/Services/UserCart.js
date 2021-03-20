import http from './httpService';
import { apiUrl1 } from "../config.json";

export const getItemList = () => {
  const apiEndPoint = `${apiUrl1}/getQRlist`;
  return http.get(`${apiEndPoint}`)
}

export function getItemByItemNumber(data) {
  console.log(data);
  const apiEndPoint = `${apiUrl1}/getQRlistbyItemNumber?ItemNumber=${data.ItemNumber}`;
  return http.get(`${apiEndPoint}`, data);
}
