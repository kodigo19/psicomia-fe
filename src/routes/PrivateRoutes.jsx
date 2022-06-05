import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../redux/slices/auth/userSlice";

export const PrivateRouteClient = ({ children }) => {
  console.log('inside private route Client');
  const authUser = useSelector(selectUser);
  console.log('authUser--->', authUser);

  if (!authUser) {
    console.log('not authUser')
    return <Navigate to='/login/user'/>
  };

  // TODO redirect/navigate to dashboard depending on role Client or Psychologist

  // console.log('Going to route');

  const role = authUser.user_id.role;

  return role === 2 ? children : <Navigate to='/psychologist/dashboard'/>;
}


export const PrivateRoutePsychologist = ({ children }) => {
  console.log('inside private route Psychologist');
  const authUser = useSelector(selectUser);
  console.log('authUser--->', authUser);

  if (!authUser) {
    console.log('not authUser')
    return <Navigate to='/login/user'/>
  };

  // TODO redirect/navigate to dashboard depending on role Client or Psychologist

  // console.log('Going to route');

  const role = authUser.user_id.role;

  return role === 3 ? children : <Navigate to='/client/dashboard'/>;
}