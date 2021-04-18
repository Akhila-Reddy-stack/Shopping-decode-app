import http from './httpService';
import { apiUrl } from "../config.json";

export const getItemList = () => {
  const apiEndPoint = `${apiUrl}/getQRlist`;
  return http.get(`${apiEndPoint}`)
}

// export function getItemByItemNumber(ItemNumber) {
//   const apiEndPoint = `${apiUrl}/getQRlistbyItemNumber`;
//   console.log(apiEndPoint)
//   return http.get(`${apiEndPoint}`,ItemNumber);
// }
export function getItemByItemNumber(data) {
  console.log(data);
  const apiEndPoint = `${apiUrl}/getQRlistbyItemNumber?ItemNumber=${data.ItemNumber}`;
  console.log(apiEndPoint)
  return http.get(`${apiEndPoint}`, data);
}


// export function hotelBooking(data) {
//   const apiEndPoint = `${apiUrl}/hotelBooking`;
//   return http.post(`${apiEndPoint}`, data);
// }

// export const gethotelFeedback = (HotelId) =>  {
//   const apiEndPoint = `${apiUrl}/getSingleHotelFeedBack?HotelId=${HotelId}`;
//   return http.get(`${apiEndPoint}`);
// }

// export const localstore = (UserId,UserName,MobileNo,EmailId) =>{
//   localStorage.setItem("UserId", UserId);
//   localStorage.setItem("UserName", UserName)
//   localStorage.setItem("MobileNo", MobileNo)
//   localStorage.setItem("EmailId", EmailId)
//   localStorage.setItem("CREATEDBY", 1)
//   localStorage.setItem("UPDATEDBY", 2)
// }

// export const getLocalStorageValues = (key) =>{
//   return localStorage.getItem(key);
// }