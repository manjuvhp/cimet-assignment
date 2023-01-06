import axios from "axios";
import { generateAuthToken } from "../services/ProductService";


const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Auth-token' : localStorage.getItem("token")
  },
});

instance.interceptors.response.use(function (response) {
  
  
return response;
}, function (error) {
  if(error.response.status === 401){
    const generateToken = async () => {
      const {status, data} = await generateAuthToken()
      if(data){
        localStorage.setItem("token", data?.data?.token)
        window.location.reload();
      }
    }
    generateToken()
  }
  
  return Promise.reject(error);
});

export const get = async (uri) => {
  const response = await instance.get(uri);
  return response;
};

export const post = async (uri) => {
  const response = await instance.post(uri);
  return response;
};
