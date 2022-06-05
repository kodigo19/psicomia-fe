import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const loginUserApiService = async ({uid, token}) => {
  try {
    console.log('token in loginUserApiService', token);
    console.log('uid in loginUserApiService', uid);
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.GETUSERDATABYUID}${uid}`, {
      method: 'get',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    const userResponse = await response.json();
    
    console.log('userResponse...', userResponse);
    localStorage.setItem('userUid', uid);
    localStorage.setItem('userId', userResponse.data.user_id.user_id);
    return { data:userResponse.data, success:true};
  } catch (error) {
    const errorCode = await error.code;
      console.log('error in loginUserApiService')
      console.log(error);
      const errorMessage = await error.message;
      const errorData = {
        code: errorCode,
        message: errorMessage,
      }
      return { error: {...errorData}, success: false };
  }
}
