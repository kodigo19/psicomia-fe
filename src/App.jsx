import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, selectUser } from "./redux/slices/auth/userSlice";
import { AppRouter } from "./routes/AppRouter";
import { auth, onAuthStateChanged } from "./utils/config/firebase-config";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // check at page load if a user is authenticated

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // dispatch(
  //       //   loginUser({
  //       //     email: user.email,
  //       //     uid: user.uid,
  //       //     displayName: user.displayName,
  //       //     photoUrl: user.photoURL,
  //       //   })
  //       // );
  //     } else {
  //       localStorage.clear();
  //       dispatch(logoutUser());
  //     }
  //   });
  // }, [dispatch]);
  return (
    <div className="">
      <div className="min-h-screen font-inter">
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
