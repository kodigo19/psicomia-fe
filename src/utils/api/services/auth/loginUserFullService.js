import { loginUserApiService } from "./loginUserApiService";
import { loginUserFirebaseService } from "./loginUserFirebaseService"

export const loginUserFullService = async(user) => {
  try {
    const loginUserFirebaseResponse = await loginUserFirebaseService(user);
    if (!loginUserFirebaseResponse.success){
      return loginUserFirebaseResponse
    }
    const firebaseUser = loginUserFirebaseResponse.data;
    console.log('firebaseUser', firebaseUser);
    const dbUser = await loginUserApiService({uid:firebaseUser.user.uid, token: firebaseUser._tokenResponse.idToken})
    if (!dbUser.success) {
      return { success: false }
    } else {
      console.log('dbUser', dbUser);
      const signedInUser = dbUser.data;
      const data = {
        data: {
          user: {...signedInUser},
          idToken: firebaseUser._tokenResponse.idToken,
          refreshToken: await firebaseUser._tokenResponse.refreshToken,
        },
        success: true
      };
      localStorage.setItem('token', firebaseUser._tokenResponse.idToken);
      localStorage.setItem('refreshToken', firebaseUser._tokenResponse.refreshToken);
      console.log('data---');
      console.log(data);
      console.log('true loginUserApiService inside loginUserFirebaseService')
      return data;
    }
  } catch (error) {
    const errorCode = await error.code;
      console.log('error in loginUserFullService')
      console.log(error);
      const errorMessage = await error.message;
      const errorData = {
        code: errorCode,
        message: errorMessage,
      }
      return { error: {...errorData}, success: false };
  }
}