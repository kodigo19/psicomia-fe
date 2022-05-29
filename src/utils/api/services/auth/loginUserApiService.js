import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const loginUserApiService = async (uid, token) => {
  try {
    console.log('token');
    console.log(token);
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.GETUSERBYUID}${uid}`, {
      method: 'get',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    const userResponse = await response.json();
    console.log('userResponse...');
    console.log(userResponse);
    localStorage.setItem('userUid', userResponse.data.uid);
    localStorage.setItem('userId', userResponse.data._id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}