import axios from "axios";  

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // window.location.href = "/Error"
    // toast.error("An unexpected error occurrred.");
  }
  return Promise.reject(error);
});

function setJwt(jwt) { 
  axios.defaults.headers.common["x-auth-token"] = "Bearer " + jwt;
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt, 
};