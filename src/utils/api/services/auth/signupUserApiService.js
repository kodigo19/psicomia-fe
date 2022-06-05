import axiosInstance from '../../../config/httpService';
import { ENDPOINTS, URI_SERVER } from '../../endpoints';

export const signupClientApiService = async (client) => {
  console.log('client',client);
  const baseURL = `${URI_SERVER}${ENDPOINTS.SIGNUPCLIENT}`
  const body = JSON.stringify(client)
  
  try {
    const response = await axiosInstance.post(
      baseURL,
      body,
    )
    const data = await response.data;
    console.log('data', data);
    return data;
    // console.log('axios executed')
    // return {data: data, success: true};
  } catch (error) {
    console.log('error in axios', error);
    return {error: {code: error.status, message: error.response.data.message}, success: false};
  } 
}

export const signupPsychologistApiService = async (psychologist) => {
  console.log('psychologist in signupPsychologistApiService',psychologist);
  const baseURL = `${URI_SERVER}${ENDPOINTS.SIGNUPPSYCHOLOGIST}`
  const body = JSON.stringify(psychologist)
  
  try {
    const response = await axiosInstance.post(
      baseURL,
      body,
    )
    const data = await response.data;
    console.log('data in signupPsychologistApiService', data);
    return data;
    // console.log('axios executed')
    // return {data: data, success: true};
  } catch (error) {
    console.log('error in axios', error);
    return {error: {code: error.status, message: error.response.data.message}, success: false};
  } 
}