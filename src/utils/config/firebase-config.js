// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8bN5B28KW43IqvblMqgD-_lm4dS1peWc",
  authDomain: "psm-dev-60779.firebaseapp.com",
  databaseURL: "https://psm-dev-60779-default-rtdb.firebaseio.com",
  projectId: "psm-dev-60779",
  storageBucket: "psm-dev-60779.appspot.com",
  messagingSenderId: "774646561028",
  appId: "1:774646561028:web:d0c62949293bfc90e9b851",
  measurementId: "G-TWX1L96X76"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);