import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, selectUser } from "./redux/slices/auth/userSlice";
import { AppRouter } from "./routes/AppRouter";
import { auth, onAuthStateChanged } from "./utils/config/firebase-config";

function App() {
  const user = useSelector(state => state.signInUser.user);
  const dispatch = useDispatch();

  // check at page load if a user is authenticated

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          loginUser({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logoutUser());
      }
    });
  }, [dispatch]);
  return (
    <div className="">
      <div className="min-h-screen font-inter">
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
