import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../redux/slices/auth/userSlice";

export const PrivateRouteClient = ({ children }) => {
  const authUser = useSelector(selectUser);

  if (!authUser) {
    return <Navigate to='/login/user'/>
  };

  // TODO redirect/navigate to dashboard depending on role Client or Psychologist

  const role = authUser.user_id.role;

  return role === 2 ? children : <Navigate to='/psychologist/dashboard'/>;
}


export const PrivateRoutePsychologist = ({ children }) => {
  const authUser = useSelector(selectUser);

  if (!authUser) {
    return <Navigate to='/login/user'/>
  };

  // TODO redirect/navigate to dashboard depending on role Client or Psychologist

  const role = authUser.user_id.role;

  return role === 3 ? children : <Navigate to='/client/dashboard'/>;
}