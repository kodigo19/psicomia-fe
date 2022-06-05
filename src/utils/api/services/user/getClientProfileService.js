import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const getClientProfileServiceById = async (user_id) => {
  try {
    console.log('inside getClientProfileServiceById')
    const token =  localStorage.getItem('token');
    console.log('token', token);
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.EPCLIENT}${user_id}`, {
      method: 'get',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    const clientResponse = await response.json();
    console.log('clientResponse...');
    console.log(clientResponse);
    localStorage.setItem('clientProfile', clientResponse.data);
    return clientResponse;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const getClientProfileServiceByUid = async (uid) => {
  try {
    console.log('inside getClientProfileService')
    const token =  localStorage.getItem('token');
    console.log('token', token);
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.GETCLIENTBYUID}${uid}`, {
      method: 'get',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    const clientResponse = await response.json();
    console.log('clientResponse...');
    console.log(clientResponse);
    localStorage.setItem('clientProfile', clientResponse.data);
    return clientResponse;
  } catch (error) {
    console.log(error);
    return false;
  }
}