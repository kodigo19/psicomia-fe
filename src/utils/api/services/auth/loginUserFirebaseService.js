import axiosInstance from '../../../config/httpService';
import { ENDPOINTS, URI_SERVER } from '../../endpoints';
import {auth, firebaseApp} from '../../../config/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { loginUserApiService } from './loginUserApiService';

export const loginUserFirebaseService = (user) => {
  const {email, password} = user
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const signedInUser = userCredential.user;
      console.log('user---- signInWithEmailAndPassword');
      console.log(userCredential);
      // ..

      const getUserProfile = loginUserApiService(userCredential.user.uid, userCredential._tokenResponse.idToken);

      if (!getUserProfile) {
        return { success: false }
      } else {
        const data = {...signedInUser, success: true};
        localStorage.setItem('token', userCredential._tokenResponse.idToken);
        localStorage.setItem('refreshToken', userCredential._tokenResponse.refreshToken);
        console.log('data---');
        console.log(data);
        return {data: data, success: true};
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log('error in siginwithemailandpassword')
      console.log(error);
      const errorMessage = error.message;
      const errorData = {
        code: errorCode,
        message: errorMessage,
      }
      return { ...errorData, success: false };
    });
}