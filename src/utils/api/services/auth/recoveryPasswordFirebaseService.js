import axiosInstance from '../../../config/httpService';
import { ENDPOINTS, URI_SERVER } from '../../endpoints';
import {auth, firebaseApp} from '../../../config/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { loginUserApiService } from './loginUserApiService';

export const recoveryPasswordFirebaseService = async (email) => {
  console.log('Paso 3');
  console.log('start recoveryPasswordFirebaseService');
  console.log('email in recoveryPasswordFirebaseService', email);
  try {
    const userCredential = await sendPasswordResetEmail(auth, email)  
    console.log('Paso 4');
      // Signed in
      console.log('userCredential', userCredential);
      // ..
      return {
        data: {
          message: 'Email enviado',
          email: email
        },
        success:true
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