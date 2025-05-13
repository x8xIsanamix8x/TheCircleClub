import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";


const { VITE_API_URL } = getEnvVariables();


const priceApi = axios.create({
  baseURL: VITE_API_URL,
});


priceApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers
  };

  return config;
});

export default priceApi;
