import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../redux/slices/auth/userSlice";

export const PrivateRouteClient = ({ children }) => {
  const authUser = useSelector(state => state.signInUser.user);
  console.log('authUser--->');
  console.log(authUser);

  console.log('inside private route');

  // if (!authUser) {
  //   console.log('not authUser')
  //   return <Navigate to='/signin/client'/>
  // };

  console.log('Going to route');

  // const { role } = decodeToken(token);
  // const role = 2;

  // return role === 2 ? children : <Navigate to='/client/dashboard'/>;
}