import axiosInstance from '../../../config/httpService';
import { ENDPOINTS, URI_SERVER } from '../../endpoints';
import {firebaseApp} from '../../../config/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

export const signInUser = async (user) => {
  const authentication = getAuth();
  const {email, password} = user
  signInWithEmailAndPassword(authentication, email, password)
    .then((userCredential) => {
      // Signed in
      const signedInUser = userCredential.user;
      // ..
      return {success: true, signedInUser}
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorData = {
        code: errorCode,
        message: errorMessage,
      }
      return { ...errorData, success: false };
    });
}