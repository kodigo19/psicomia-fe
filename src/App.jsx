import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/slices/auth/signInUserSlice";
import { AppRouter } from "./routes/AppRouter";

function App() {
  const authentication = getAuth();
  const user = useSelector((state) => state.user);
  console.log("user from state", user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        dispatch(setUser(user.refreshToken));
      } else {
        dispatch(setUser(undefined));
      }
    });
  }, [authentication, dispatch]);
  return (
    <div className="">
      <div className="min-h-screen font-inter">
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
