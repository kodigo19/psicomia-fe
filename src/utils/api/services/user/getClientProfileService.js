import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const getClientProfileServiceById = async (user_id) => {
  try {
    const token =  localStorage.getItem('token');
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.EPCLIENT}${user_id}`, {
      method: 'get',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    const clientResponse = await response.json();
    localStorage.setItem('clientProfile', clientResponse.data);
    return clientResponse;
  } catch (error) {
    return false;
  }
}

export const getClientProfileServiceByUid = async (uid) => {
  try {
    const token =  localStorage.getItem('token');
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.GETCLIENTBYUID}${uid}`, {
      method: 'get',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    const clientResponse = await response.json();
    localStorage.setItem('clientProfile', clientResponse.data);
    return clientResponse;
  } catch (error) {
    return false;
  }
}