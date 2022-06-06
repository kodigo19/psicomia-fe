import axiosInstance from '../../../config/httpService';
import { ENDPOINTS, URI_SERVER } from '../../endpoints';

export const signupClientApiService = async (client) => {
  const baseURL = `${URI_SERVER}${ENDPOINTS.SIGNUPCLIENT}`
  const body = JSON.stringify(client)
  
  try {
    const response = await axiosInstance.post(
      baseURL,
      body,
    )
    const data = await response.data;
    return data;
    // return {data: data, success: true};
  } catch (error) {
    return {error: {code: error.status, message: error.response.data.message}, success: false};
  } 
}

export const signupPsychologistApiService = async (psychologist) => {
  const baseURL = `${URI_SERVER}${ENDPOINTS.SIGNUPPSYCHOLOGIST}`
  const body = JSON.stringify(psychologist)
  
  try {
    const response = await axiosInstance.post(
      baseURL,
      body,
    )
    const data = await response.data;
    return data;
    // return {data: data, success: true};
  } catch (error) {
    return {error: {code: error.status, message: error.response.data.message}, success: false};
  } 
}