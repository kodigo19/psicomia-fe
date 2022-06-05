import axiosInstance from '../../../config/httpService';
import { ENDPOINTS, URI_SERVER } from '../../endpoints';
import {auth, firebaseApp} from '../../../config/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { loginUserApiService } from './loginUserApiService';

export const loginUserFirebaseService = async (user) => {
  console.log('Paso 3');
  console.log('start loginUserFirebaseService');
  const {email, password} = user;
  console.log('user in loginUserFirebaseService', user);
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)  
    console.log('Paso 4');
      // Signed in
      console.log('userCredential', userCredential);
      // ..
      return {
        data: {
          user: {
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
            phoneNumber: userCredential.user.phoneNumber,
            uid: userCredential.user.uid
          },
        _tokenResponse: userCredential._tokenResponse
      }, success:true
      };
  } catch (error) {
    const errorCode = await error.code;
      console.log(error);
      const errorMessage = await error.message;
      const errorData = {
        code: errorCode,
        message: errorMessage,
      }
      return { error:{...errorData}, success: false };
  }
}