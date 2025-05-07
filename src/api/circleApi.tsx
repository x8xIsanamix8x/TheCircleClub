import axios, { AxiosHeaders } from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";


const { VITE_API_URL } = getEnvVariables();

const circleApi = axios.create({
    baseURL: VITE_API_URL
});

circleApi.interceptors.request.use(config => {
    if (config.headers && config.headers instanceof AxiosHeaders) {
        config.headers.set("Authorization", "Bearer token");
        config.headers.set("Content-Type", "application/json");
    }

    return config;
});

export default circleApi;
