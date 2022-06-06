import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../../config/firebase-config';
export const signupUserFirebaseService = async (user) => {
  const {email, password} = user;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    // Signed in
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
      },
      success: true
    };
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