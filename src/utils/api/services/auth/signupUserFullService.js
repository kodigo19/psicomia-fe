import { signupClientApiService, signupPsychologistApiService } from "./signupUserApiService";
import { signupUserFirebaseService } from "./signupUserFirebaseService";
import { loginUserFirebaseService } from "./loginUserFirebaseService"

export const signupClientFullService = async(client) => {

  const apiResponse = await signupClientApiService(
    {
      password: client.password,
      email: client.email,
      profile: {
        firstname: client.first_name,
        lastname: client.last_name,
        main_therapy_area: client.main_therapy_area,
      }
    }
  );
  if (!apiResponse.success) {
    return { error: apiResponse.error, success: false}
  }
    const signedupUser = await apiResponse.data;

    // Execute Firebase Login
    const loginUser = {
      email: client.email,
      password: client.password,
    }
    const loginUserFirebaseResponse =await loginUserFirebaseService(loginUser)
    const firebaseUser = loginUserFirebaseResponse.data;
    const data = {
      data: {
        user: {...signedupUser},
        idToken: firebaseUser._tokenResponse.idToken,
        refreshToken: firebaseUser._tokenResponse.refreshToken,
      },
      success: true
    };
    return data;
}

export const signupPsychologistFullService = async(psychologist) => {
    const apiResponse = await signupPsychologistApiService(
      {
        password: psychologist.password,
        email: psychologist.email,
        profile: {
          firstname: psychologist.firstname,
          lastname: psychologist.lastname,
          phoneNumber: psychologist.phoneNumber,
          nationality: psychologist.nationality,
          country_grade: psychologist.country_grade,
          grade_status: psychologist.grade_status,
          specialization_status: psychologist.specialization_status,
          experience_years: psychologist.experience_years,
          referral: psychologist.referral,
        }
      }
    );
    if (!apiResponse.success) {
      return { error: apiResponse.error, success: false}
    }
      const signedupUser = await apiResponse.data;
  
      // Execute Firebase Login
      const loginUser = {
        email: psychologist.email,
        password: psychologist.password,
      }
      const loginUserFirebaseResponse =await loginUserFirebaseService(loginUser)
      const firebaseUser = loginUserFirebaseResponse.data;
      const data = {
        data: {
          user: {...signedupUser},
          idToken: firebaseUser._tokenResponse.idToken,
          refreshToken: firebaseUser._tokenResponse.refreshToken,
        },
        success: true
      };
      return data;
  }