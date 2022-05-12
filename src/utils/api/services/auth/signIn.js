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
      console.log('user---- signInWithEmailAndPassword');
      console.log(userCredential);
      // ..
      const data = {...signedInUser, success: true};
      console.log('data---');
      console.log(data);
      return data;
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