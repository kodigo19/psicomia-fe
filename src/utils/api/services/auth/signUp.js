import axiosInstance from '../../../config/httpService';
import { ENDPOINTS, URI_SERVER } from '../../endpoints';

export const signUpClient = async (client) => {
  const baseURL = `${URI_SERVER}${ENDPOINTS.SIGNUPCLIENT}`
  const body = JSON.stringify(client)
  axiosInstance.post(
    baseURL,
    body,
  ).then((response) => {
    const data = response.json();
    return data;
  }).catch((error) => {
    console.log(error);
  });
}

export const signUpPsychologist = async (psychologist) => {
  const baseURL = `${URI_SERVER}${ENDPOINTS.SIGNUPPSYCHOLOGIST}`
  const body = JSON.stringify(psychologist)
  axiosInstance.post(
    baseURL,
    body,
  ).then((response) => {
    const data = response.json();
    return data;
  }).catch((error) => {
    console.log(error);
  });
}