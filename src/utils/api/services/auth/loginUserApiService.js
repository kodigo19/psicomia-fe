import { ENDPOINTS, URI_SERVER } from "../../endpoints";

export const loginUserApiService = async ({uid, token}) => {
  try {
    const response = await fetch(`${URI_SERVER}${ENDPOINTS.GETUSERDATABYUID}${uid}`, {
      method: 'get',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
    });
    const userResponse = await response.json();
    
    localStorage.setItem('userUid', uid);
    localStorage.setItem('userId', userResponse.data.user_id.user_id);
    return { data:userResponse.data, success:true};
  } catch (error) {
    const errorCode = await error.code;
      const errorMessage = await error.message;
      const errorData = {
        code: errorCode,
        message: errorMessage,
      }
      return { error: {...errorData}, success: false };
  }
}
