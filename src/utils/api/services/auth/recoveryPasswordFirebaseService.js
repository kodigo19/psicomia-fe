import axiosInstance from '../../../config/httpService';
import { ENDPOINTS, URI_SERVER } from '../../endpoints';
import {auth, firebaseApp} from '../../../config/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { loginUserApiService } from './loginUserApiService';

export const recoveryPasswordFirebaseService = async (email) => {
  try {
    const userCredential = await sendPasswordResetEmail(auth, email)  
      // Signed in
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
      const errorMessage = await error.message;
      const errorData = {
        code: errorCode,
        message: errorMessage,
      }
      return { error:{...errorData}, success: false };
  }
}