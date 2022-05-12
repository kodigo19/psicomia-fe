import { Navigate } from "react-router-dom";

export const PrivateRouteClient = ({ children }) => {

  const token = localStorage.getItem('token');

  if (!token) return <Navigate to='/signin/client'/>;

  // const { role } = decodeToken(token);
  const role = 2;

  return role === 2 ? children : <Navigate to='/client/dashboard'/>;
}