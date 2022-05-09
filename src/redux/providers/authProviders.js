import { Provider } from "react-redux";
import { authStore } from "../stores";

const AuthProvider = ({ children }) => {
  return <Provider store={authStore}>{children}</Provider>
}

export default AuthProvider;